import type { TDispatch, TStore } from "./store";

import { TypedUseSelectorHook } from "react-redux";

import { useDispatch, useSelector } from "react-redux";

export const useAppDispatch: () => TDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<TStore> = useSelector