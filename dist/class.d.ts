import { Class as ToolbeltClass } from "ts-toolbelt";
declare type Class<ObjectType extends object, Arguments extends unknown[]> = ToolbeltClass.Class<Arguments, ObjectType>;
export default Class;
