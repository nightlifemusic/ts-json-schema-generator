type LiteralType = 'one' | 'two' | 'three';

type SomeOtherType<T> = {
  $in: T[];
}

type SomeType<T> = { [P in keyof T]: SomeOtherType<T[P]> }

interface SomeInterface<T> {
  foo: SomeType<T>;
}

interface PropObject {
  test: LiteralType;
}

export type MyObject = SomeInterface<PropObject>;
