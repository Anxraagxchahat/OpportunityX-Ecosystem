import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  className = '',
}) => {
  if (!content) return null;

  // Split content by blocks
  const blocks = content.split(/\n\n+/);

  return (
    <div className={`prose-content space-y-5 text-text-primary leading-relaxed ${className}`}>
      {blocks.map((block, idx) => {
        const trimmed = block.trim();

        // Code block: ```lang \n code \n ```
        if (trimmed.startsWith('```')) {
          const lines = trimmed.split('\n');
          const firstLine = lines[0].replace('```', '').trim();
          const language = firstLine || 'text';
          const codeBody = lines.slice(1, lines[lines.length - 1].startsWith('```') ? -1 : undefined).join('\n');

          return <CodeBlock key={idx} language={language} code={codeBody} />;
        }

        // Heading 2: ## ...
        if (trimmed.startsWith('## ')) {
          return (
            <h2
              key={idx}
              className="type-h2 text-text-primary font-bold pt-4 pb-1 border-b border-border-subtle tracking-tight text-xl sm:text-2xl"
            >
              {renderInline(trimmed.replace('## ', ''))}
            </h2>
          );
        }

        // Heading 3: ### ...
        if (trimmed.startsWith('### ')) {
          return (
            <h3
              key={idx}
              className="type-h3 text-text-primary font-semibold pt-3 text-lg sm:text-xl"
            >
              {renderInline(trimmed.replace('### ', ''))}
            </h3>
          );
        }

        // Heading 4: #### ...
        if (trimmed.startsWith('#### ')) {
          return (
            <h4
              key={idx}
              className="text-text-primary font-medium pt-2 text-base sm:text-lg"
            >
              {renderInline(trimmed.replace('#### ', ''))}
            </h4>
          );
        }

        // Horizontal Rule: ---
        if (trimmed === '---') {
          return <hr key={idx} className="my-6 border-border-subtle" />;
        }

        // Blockquote: > ...
        if (trimmed.startsWith('> ')) {
          const quoteText = trimmed.replace(/^>\s*/gm, '');
          return (
            <blockquote
              key={idx}
              className="border-l-4 border-accent-brand bg-surface-elevated/60 rounded-r-lg px-4 py-3 text-text-secondary italic text-base"
            >
              {renderInline(quoteText)}
            </blockquote>
          );
        }

        // Unordered List: - ... or * ...
        if (/^[-*]\s+/m.test(trimmed)) {
          const listItems = trimmed
            .split('\n')
            .filter((l) => /^[-*]\s+/.test(l.trim()))
            .map((l) => l.trim().replace(/^[-*]\s+/, ''));

          return (
            <ul key={idx} className="list-disc list-outside pl-5 space-y-2 text-text-secondary text-sm sm:text-base">
              {listItems.map((item, itemIdx) => (
                <li key={itemIdx}>{renderInline(item)}</li>
              ))}
            </ul>
          );
        }

        // Ordered List: 1. ...
        if (/^\d+\.\s+/m.test(trimmed)) {
          const listItems = trimmed
            .split('\n')
            .filter((l) => /^\d+\.\s+/.test(l.trim()))
            .map((l) => l.trim().replace(/^\d+\.\s+/, ''));

          return (
            <ol key={idx} className="list-decimal list-outside pl-5 space-y-2 text-text-secondary text-sm sm:text-base">
              {listItems.map((item, itemIdx) => (
                <li key={itemIdx}>{renderInline(item)}</li>
              ))}
            </ol>
          );
        }

        // Standard Paragraph (React escapes HTML entities automatically)
        return (
          <p key={idx} className="type-body text-text-secondary text-sm sm:text-base leading-relaxed">
            {renderInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
};

// Safe URL protocol validator to block javascript:, data:, and vbscript: URIs
const isSafeUrl = (url: string): boolean => {
  if (!url) return false;
  const clean = url.trim().toLowerCase();
  if (
    clean.startsWith('javascript:') ||
    clean.startsWith('data:') ||
    clean.startsWith('vbscript:') ||
    clean.startsWith('file:')
  ) {
    return false;
  }
  return true;
};

// Safe inline renderer: supports **bold**, `code`, [link](url)
const renderInline = (text: string): React.ReactNode[] => {
  // Regex to split by markdown tokens
  const tokenRegex = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, index) => {
    if (!part) return null;

    // Bold: **text**
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="text-text-primary font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }

    // Inline Code: `code`
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={index}
          className="type-mono rounded bg-surface-elevated px-1.5 py-0.5 text-xs text-accent-brand border border-border-subtle"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    // Link: [text](url)
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, linkText, linkUrl] = linkMatch;
      const safeHref = isSafeUrl(linkUrl) ? linkUrl : '#';
      const isExternal = safeHref.startsWith('http://') || safeHref.startsWith('https://');

      return (
        <a
          key={index}
          href={safeHref}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-accent-brand font-medium hover:underline underline-offset-2 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-focus-ring rounded-sm"
        >
          {linkText}
        </a>
      );
    }

    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
};

interface CodeBlockProps {
  language: string;
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative my-4 rounded-xl border border-border-subtle bg-surface overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border-subtle bg-surface-elevated/80 text-text-muted text-xs">
        <span className="type-mono uppercase tracking-wider font-semibold">{language}</span>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-focus-ring"
          aria-label={copied ? 'Code copied to clipboard' : 'Copy code to clipboard'}
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-accent-brand" aria-hidden="true" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-xs sm:text-sm font-mono text-text-primary leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
};
