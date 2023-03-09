import * as yup from "yup";
import { ISchema } from "yup";

// @typescript-eslint/ban-ts-comment
// eslint-disable-next-line
export type FormDataType<T extends ISchema<any>> = yup.InferType<T>;
