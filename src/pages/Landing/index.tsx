import { css } from "catom";

import { useMount } from "@/hooks/use-mount";
import { useAlerts } from "@hydrophobefireman/kit/alerts";
import { Container } from "@hydrophobefireman/kit/container";
import { Switch, useSwitch } from "@hydrophobefireman/kit/input";
import { Text } from "@hydrophobefireman/kit/text";
import { AnimateLayout, Motion } from "@hydrophobefireman/ui-anim";
import {
  A,
  loadURL,
  useEffect,
  useRef,
  useState,
} from "@hydrophobefireman/ui-lib";

function usePRM() {
  const q = window.matchMedia("(prefers-reduced-motion: reduce)");
  const [pref, setPref] = useState(q.matches);
  useMount(() => {
    const l = (e) => {
      setPref(e.matches);
    };
    q.addEventListener("change", l);
    return () => q.removeEventListener("change", l);
  });
  return pref;
}
function useA11yAudit() {
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
  return onBadClick;
}
function LandingV0() {
  const pref = usePRM();
  const onBadClick = useA11yAudit();
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
      <AnimateLayout animId={pref ? null : "supl"} element="p">
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
      </AnimateLayout>
    </Container>
  );
}

function LandingV1() {
  const pref = usePRM();
  const onBadClick = useA11yAudit();
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
        <A href="/bad">link to a "bad" website in terms of accessibilty</A>
        <button
          onClick={onBadClick}
          class={css({
            padding: ".25rem",
            borderRadius: "50%",
            background: "orange",
            display: "inline-flex",
            height: "1.95rem",
            width: "1.95rem",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: ".6rem",
          })}
        >
          55/100
        </button>
      </Text>
      <Text.p>
        In this version, the user explicitly clicks on the chip to get the a11y
        report. Clicking the link otherwise would cause the navigation to go
        unhindered.
      </Text.p>
      <AnimateLayout animId={pref ? Math.random() + "" : "supl"} element="p">
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
      </AnimateLayout>
    </Container>
  );
}
const PREFER_OLD_VERSION = "Show old version";
const PREFER_NEW_VERSION = "Show new version";
export default function Landing() {
  const { currentState, toggle } = useSwitch("enabled");
  const isEnabled = currentState === "enabled";
  const labelText = isEnabled ? PREFER_OLD_VERSION : PREFER_NEW_VERSION;
  return (
    <Motion>
      <Container horizontal="center">
        <Switch state={currentState} onInput={toggle} label={labelText} />
        <Text.span aria-hidden>{labelText}</Text.span>
        <div>{isEnabled ? <LandingV1 /> : <LandingV0 />}</div>
      </Container>
    </Motion>
  );
}
