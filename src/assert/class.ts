import Guard from "../boolean/class";
import Callback from "@dikac/t-function/assert/callback";
import ClassError from "./throwable/class";
import ClassInterface from "../class";

export default function Class<Instance extends ClassInterface<object, unknown[]>>(
    value : unknown,
    error : (value:unknown)=>Error = ClassError
) : asserts value is Instance {

    Callback(value, Guard, error);
}
