import { environment } from '../../../environments/environment';
/* This file should contain All EndPoint Routes Across all the application*/
/* Follow the Naming Convention*/
export const API_URLS = {
    'verifyEmail': {
        'verifyEmail': environment.serverUrl + 'v1/verification/email/{tokenId}?ak={ak}',
        /*    How To Use
            const url = API_URLS.verifyEmail.verifyEmail.replace('{tokenId}', token)
            replace('{ak}', btoa(CONFIG.CLIENT_ID));

            CONFIG is imported from defines.ts
            */
        'verifyPdf': environment.serverUrl + 'v1/verification/email/{tokenId}?ak={ak}&vf-country-code={countryCode}'
    },
}