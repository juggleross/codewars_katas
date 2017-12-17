new with apply
JavaScript:

function construct(Class) {
  return new (Function.prototype.bind.apply(Class, arguments));
}
