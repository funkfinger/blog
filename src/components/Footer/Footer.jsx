import React from 'react';

const Footer = () => (
  <footer>
    <p
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...{ 'xmlns:dct': 'http://purl.org/dc/terms/' }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...{ 'xmlns:vcard': 'http://www.w3.org/2001/vcard-rdf/3.0#' }}
    >
      <a rel="license" href="http://creativecommons.org/publicdomain/zero/1.0/">
        <img src="https://licensebuttons.net/p/zero/1.0/88x31.png" alt="CC0" />
      </a>
      <br />
      To the extent possible under law,{' '}
      <a rel="dct:publisher" href="https://jaywiggins.com">
        I
      </a>{' '}
      have waived all copyright and related or neighboring rights to any content
      I have created for <span property="dct:title">jaywiggins.com</span>. This
      work is published from:{' '}
      <span
        property="vcard:Country"
        datatype="dct:ISO3166"
        content="US"
        about="https://jaywiggins.com"
      >
        United States
      </span>
      .
    </p>
  </footer>
);

export default Footer;
