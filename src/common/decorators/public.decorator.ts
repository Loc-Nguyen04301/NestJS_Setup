import { SetMetadata } from '@nestjs/common';

// Don't check access token for request
export const Public = () => SetMetadata('isPublic', true);
