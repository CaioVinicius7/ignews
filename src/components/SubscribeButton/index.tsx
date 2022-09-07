import { signIn, useSession } from "next-auth/react";

import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession();

  function HandleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    }
  }

  return (
    <button className={styles.subscribeButton} onClick={HandleSubscribe}>
      Subscribe now
    </button>
  );
}
