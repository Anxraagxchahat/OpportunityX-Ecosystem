import React, { useState, useCallback, useId } from 'react';
import { Send, Loader2, CheckCircle2, AlertTriangle, RotateCcw, ExternalLink, PlusCircle } from 'lucide-react';
import {
  ContactFormData,
  ContactReason,
  CONTACT_REASONS,
  INITIAL_FORM_DATA,
  FieldError,
  validateContactForm,
  submitContactForm,
  VALIDATION_LIMITS,
} from '@/data/contactData';

type FormState = 'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR';

export const ContactForm: React.FC = () => {
  const formId = useId();
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [formState, setFormState] = useState<FormState>('IDLE');
  const [fieldErrors, setFieldErrors] = useState<FieldError[]>([]);
  const [submitError, setSubmitError] = useState<string>('');
  const [mailtoUri, setMailtoUri] = useState<string>('');
  const [touchedFields, setTouchedFields] = useState<Set<keyof ContactFormData>>(new Set());

  // Get error for a specific field
  const getFieldError = useCallback(
    (field: keyof ContactFormData): string | undefined => {
      if (!touchedFields.has(field) && formState === 'IDLE') return undefined;
      return fieldErrors.find((e) => e.field === field)?.message;
    },
    [fieldErrors, touchedFields, formState]
  );

  // Handle field value changes
  const handleChange = useCallback(
    (field: keyof ContactFormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      // Clear field-level error on edit
      setFieldErrors((prev) => prev.filter((e) => e.field !== field));
    },
    []
  );

  // Mark field as touched on blur for inline UX validation
  const handleBlur = useCallback(
    (field: keyof ContactFormData) => {
      setTouchedFields((prev) => new Set(prev).add(field));
      const errors = validateContactForm(formData);
      const fieldError = errors.find((e) => e.field === field);
      setFieldErrors((prev) => {
        const filtered = prev.filter((e) => e.field !== field);
        return fieldError ? [...filtered, fieldError] : filtered;
      });
    },
    [formData]
  );

  // Handle form submission via Web3Forms API
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      // Mark all fields as touched
      const allFields: (keyof ContactFormData)[] = ['name', 'email', 'reason', 'subject', 'message'];
      setTouchedFields(new Set(allFields));

      // Validate on client
      const errors = validateContactForm(formData);
      setFieldErrors(errors);

      if (errors.length > 0) {
        // Focus the first errored field
        const firstError = errors[0];
        const el = document.getElementById(`${formId}-${firstError.field}`);
        if (el) el.focus();
        return;
      }

      setFormState('SUBMITTING');
      setSubmitError('');

      try {
        const result = await submitContactForm(formData);

        if (result.success) {
          setFormState('SUCCESS');
        } else {
          setFormState('ERROR');
          setSubmitError(result.error);
          if (result.mailtoUri) {
            setMailtoUri(result.mailtoUri);
          }
        }
      } catch {
        setFormState('ERROR');
        setSubmitError('A network error occurred. Please check your connection or reach out directly via email.');
      }
    },
    [formData, formId]
  );

  // Reset form for a fresh inquiry
  const handleReset = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
    setFormState('IDLE');
    setFieldErrors([]);
    setSubmitError('');
    setMailtoUri('');
    setTouchedFields(new Set());
  }, []);

  // Return to editing with current form data preserved
  const handleReturnToEdit = useCallback(() => {
    setFormState('IDLE');
    setSubmitError('');
  }, []);

  // Open default email client with prefilled mailto URI (fallback)
  const handleOpenEmailClient = useCallback(() => {
    if (mailtoUri) {
      window.location.href = mailtoUri;
    }
  }, [mailtoUri]);

  // --------------------------------------------------------------------------
  // SUCCESS STATE (Real Web3Forms confirmation)
  // --------------------------------------------------------------------------
  if (formState === 'SUCCESS') {
    return (
      <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center space-y-6">
        <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            Message Delivered Successfully
          </h3>
          <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
            Thank you for reaching out, <span className="font-semibold text-text-primary">{formData.name || 'Builder'}</span>. Your message has been transmitted directly to our inbox. Our team will review your inquiry and reply to <span className="font-mono text-text-primary text-xs">{formData.email}</span> shortly.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-surface-elevated border border-border-subtle px-6 py-3 text-sm font-semibold text-text-primary hover:bg-surface-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring cursor-pointer"
          >
            <PlusCircle className="h-4 w-4" aria-hidden="true" />
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // FORM (IDLE / SUBMITTING / ERROR)
  // --------------------------------------------------------------------------
  const isSubmitting = formState === 'SUBMITTING';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Global Error Banner */}
      {formState === 'ERROR' && submitError && (
        <div
          className="flex items-start gap-3 rounded-lg border border-red-500/20 bg-red-500/5 p-4"
          role="alert"
        >
          <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-2">
            <div>
              <p className="text-sm font-medium text-text-primary">Submission Notice</p>
              <p className="text-xs text-text-secondary mt-1">{submitError}</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleReturnToEdit}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-brand hover:text-accent-hover transition-colors cursor-pointer"
              >
                <RotateCcw className="h-3 w-3" aria-hidden="true" />
                Try Again
              </button>

              {mailtoUri && (
                <button
                  type="button"
                  onClick={handleOpenEmailClient}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-primary hover:underline transition-colors cursor-pointer"
                >
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  Open in Email Client
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Name */}
      <FormField
        id={`${formId}-name`}
        label="Full Name"
        error={getFieldError('name')}
        required
      >
        <input
          id={`${formId}-name`}
          type="text"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          onBlur={() => handleBlur('name')}
          disabled={isSubmitting}
          maxLength={VALIDATION_LIMITS.name.max}
          placeholder="Your full name"
          autoComplete="name"
          aria-invalid={!!getFieldError('name')}
          aria-describedby={getFieldError('name') ? `${formId}-name-error` : undefined}
          className="form-input"
        />
      </FormField>

      {/* Email */}
      <FormField
        id={`${formId}-email`}
        label="Email Address"
        error={getFieldError('email')}
        required
      >
        <input
          id={`${formId}-email`}
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          disabled={isSubmitting}
          maxLength={VALIDATION_LIMITS.email.max}
          placeholder="you@example.com"
          autoComplete="email"
          aria-invalid={!!getFieldError('email')}
          aria-describedby={getFieldError('email') ? `${formId}-email-error` : undefined}
          className="form-input"
        />
      </FormField>

      {/* Inquiry Reason */}
      <FormField
        id={`${formId}-reason`}
        label="Inquiry Reason"
        error={getFieldError('reason')}
        required
      >
        <select
          id={`${formId}-reason`}
          value={formData.reason}
          onChange={(e) => handleChange('reason', e.target.value as ContactReason)}
          onBlur={() => handleBlur('reason')}
          disabled={isSubmitting}
          aria-invalid={!!getFieldError('reason')}
          aria-describedby={getFieldError('reason') ? `${formId}-reason-error` : undefined}
          className={`form-input appearance-none ${!formData.reason ? 'text-text-muted' : ''}`}
        >
          <option value="" disabled>
            Select a reason
          </option>
          {CONTACT_REASONS.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </FormField>

      {/* Subject */}
      <FormField
        id={`${formId}-subject`}
        label="Subject"
        error={getFieldError('subject')}
        required
      >
        <input
          id={`${formId}-subject`}
          type="text"
          value={formData.subject}
          onChange={(e) => handleChange('subject', e.target.value)}
          onBlur={() => handleBlur('subject')}
          disabled={isSubmitting}
          maxLength={VALIDATION_LIMITS.subject.max}
          placeholder="Brief subject of your inquiry"
          aria-invalid={!!getFieldError('subject')}
          aria-describedby={getFieldError('subject') ? `${formId}-subject-error` : undefined}
          className="form-input"
        />
      </FormField>

      {/* Message */}
      <FormField
        id={`${formId}-message`}
        label="Message"
        error={getFieldError('message')}
        required
        hint={`${formData.message.length} / ${VALIDATION_LIMITS.message.max}`}
      >
        <textarea
          id={`${formId}-message`}
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          onBlur={() => handleBlur('message')}
          disabled={isSubmitting}
          maxLength={VALIDATION_LIMITS.message.max}
          rows={5}
          placeholder="Describe your inquiry, feedback, or proposal in detail..."
          aria-invalid={!!getFieldError('message')}
          aria-describedby={getFieldError('message') ? `${formId}-message-error` : undefined}
          className="form-input resize-y min-h-[120px]"
        />
      </FormField>

      {/* Honeypot Field — hidden from humans, catches automated bots */}
      <div className="absolute -left-[9999px] -top-[9999px]" aria-hidden="true">
        <label htmlFor={`${formId}-website_url_hp`}>Website</label>
        <input
          id={`${formId}-website_url_hp`}
          type="text"
          name="website_url_hp"
          value={formData.honeypot}
          onChange={(e) => handleChange('honeypot', e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-lg bg-accent-brand px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending Message…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

// --------------------------------------------------------------------------
// Internal: FormField wrapper for consistent label / error rendering
// --------------------------------------------------------------------------
interface FormFieldProps {
  id: string;
  label: string;
  children: React.ReactNode;
  error?: string;
  required?: boolean;
  hint?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  children,
  error,
  required,
  hint,
}) => {
  return (
    <div className="space-y-1.5">
      <div className="flex items-baseline justify-between gap-2">
        <label htmlFor={id} className="text-sm font-medium text-text-primary">
          {label}
          {required && (
            <span className="text-accent-brand ml-0.5" aria-hidden="true">
              *
            </span>
          )}
        </label>
        {hint && !error && (
          <span className="text-[11px] text-text-muted font-mono">{hint}</span>
        )}
      </div>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          className="flex items-center gap-1.5 text-xs text-red-500 font-medium"
          role="alert"
        >
          <AlertTriangle className="h-3 w-3 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
};
