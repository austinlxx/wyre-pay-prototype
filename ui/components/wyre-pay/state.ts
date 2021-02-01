import { atom } from "jotai";
import { fakeStore } from "@/pages/api/fakeStore";

// State that is shared across all components within the respective page
export const currentStepAtom = atom(1);
export const paymentMethodAtom = atom("");
export const fiatValueAtom = atom(0);
export const cryptoTypeAtom = atom(fakeStore.cryptoTypes[0]);
export const fiatTypeAtom = atom(fakeStore.fiatTypes[0]);
export const feesAtom = atom(fakeStore.fees);
