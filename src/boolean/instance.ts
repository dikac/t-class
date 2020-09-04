import {Class} from "ts-toolbelt";
import Constructor from "../class";

export default function Instance<
    InstanceT extends Constructor<object, unknown[]>
>(
    value : unknown,
    instance : InstanceT
) : value is Class.InstanceOf<InstanceT> {

    return value instanceof instance;
}
