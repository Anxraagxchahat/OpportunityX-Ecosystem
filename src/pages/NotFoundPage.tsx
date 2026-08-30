import React from 'react';
import { ErrorState } from '@/components/common/ErrorState';
import { Container } from '@/components/ui/Container';
import { SeoManager } from '@/components/common/SeoManager';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20">
      <SeoManager
        title="404 Not Found"
        description="The OpportunityX page or resource you requested could not be located."
      />
      <Container size="md">
        <ErrorState
          statusCode={404}
          title="Route Not Found"
          description="The OpportunityX page or resource you requested could not be located in this directory."
          showHomeButton={true}
        />
      </Container>
    </div>
  );
};
