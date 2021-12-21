import { useEffect } from "react";

export function useDescription(desc) {
    useEffect(() => {
      const el = document.querySelector("meta[name='description']");
      return () => {
        el.setAttribute('content',desc)
      }
    })
  }