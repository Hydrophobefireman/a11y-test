import { Container } from "@hydrophobefireman/kit/container";
import { Text } from "@hydrophobefireman/kit/text";
import { A } from "@hydrophobefireman/ui-lib";

export default function Good() {
  return (
    <Container horizontal="center">
      <Text.p> Some website with bad a11y.</Text.p>
      <A href="/">Go back home</A>
    </Container>
  );
}
