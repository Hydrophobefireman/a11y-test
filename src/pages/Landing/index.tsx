import { css } from "catom";

import { useAlerts } from "@hydrophobefireman/kit/alerts";
import { Container } from "@hydrophobefireman/kit/container";
import { Text } from "@hydrophobefireman/kit/text";
import { A, loadURL, useEffect, useRef } from "@hydrophobefireman/ui-lib";

export default function Landing() {
  const { persist } = useAlerts();
  const hideHandle = useRef(null);
  function onBadClick(e: MouseEvent) {
    e.preventDefault();

    const { hide } = persist({
      type: "error",
      cancelText: "Go back",
      actionText: "Visit anyway",
      onCancelClick: () => {},
      onActionClick: () => loadURL("/bad"),
      content: (
        <div>
          <div>
            You are about to visit <strong>bad-website.com</strong>. The website
            has a low score in terms of accessibility. It might be difficult to
            navigate around.
          </div>
          <small>
            The website has a score of 55 out of 100 as voted by the community
            and experts.{" "}
            <A href="." class={css({ textDecoration: "none" })}>
              <Text.span weight="bold" color="kit-background">
                Learn more here
              </Text.span>
            </A>
          </small>
        </div>
      ),
    }) as any;
    hideHandle.current = hide;
  }
  useEffect(() => () => {
    hideHandle.current && hideHandle.current();
  });
  return (
    <Container
      horizontal="center"
      class={css({ maxWidth: "80ch", marginTop: "2rem", margin: "auto" })}
    >
      <Text as="strong">Assuming you have the extension installed</Text>
      <Text as="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis
        varius lectus non tempus. Aenean nec gravida mi. Cras a nunc nec libero
        suscipit bibendum. Etiam fringilla sem euismod faucibus vestibulum.
        Pellentesque semper pretium nisi, sit amet maximus magna finibus eget.
        Proin bibendum nunc eros. Quisque non pellentesque enim. Ut euismod
        tellus tellus, consequat aliquam metus suscipit malesuada. Maecenas
        vitae enim id massa rutrum placerat. Morbi eget diam quis dolor iaculis
        blandit.{" "}
        <a href="/bad" onClick={onBadClick}>
          link to a "bad" website in terms of accessibilty
        </a>
      </Text>
      <Text as="p">
        Maecenas nec faucibus enim. Etiam nec enim vel tellus gravida volutpat.
        Maecenas ut urna id ex iaculis tincidunt in in nulla. Proin volutpat,
        risus nec laoreet tincidunt, ipsum lectus gravida augue, a tincidunt
        nulla risus a lacus. Nullam eu erat venenatis, ultrices ex nec,
        tincidunt quam. Proin feugiat erat lacinia odio aliquet egestas.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Praesent lacus ante, convallis ac ultricies at,
        pulvinar vel felis. Morbi hendrerit nibh vitae nulla blandit, sit amet
        consectetur metus pellentesque. Vestibulum dignissim hendrerit metus,
        quis porttitor eros aliquet in. Nulla viverra tincidunt tellus, commodo
        placerat eros tincidunt a. Pellentesque in vehicula augue. Sed nec
        tortor sollicitudin, tincidunt felis mollis, porttitor quam. Proin
        sagittis risus vitae enim bibendum eleifend. Phasellus mattis feugiat
        orci id faucibus. Aenean in iaculis sem.{" "}
        <A href="/good">link to a "Good" website in terms of accessibilty</A>
      </Text>
    </Container>
  );
}
