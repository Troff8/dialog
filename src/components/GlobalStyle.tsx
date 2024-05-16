import { createGlobalStyle } from "styled-components";
import { standard } from "@salutejs/plasma-typo";
import { light } from "@salutejs/plasma-tokens-web/themes";

const DocumentStyle = createGlobalStyle`
    html {
        width : 100%:
    }
`;
const ThemeStyle = createGlobalStyle(light);
const TypoStyle = createGlobalStyle(standard);

export const GlobalStyle = () => (
  <>
    <DocumentStyle />
    <ThemeStyle />
    <TypoStyle />
  </>
);
