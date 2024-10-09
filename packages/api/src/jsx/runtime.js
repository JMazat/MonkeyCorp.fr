export const jsx = (tag, props) => {
  let children = null
  if(props !== null)
    children = props.children;
  if (typeof tag === "function")
    return tag(props, children);
  return null
}

export const frag = (tag, props) => {
  throw Error("Not implemented: Do not use Fragments for now.")
}
