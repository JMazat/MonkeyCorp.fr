const jsx = (tag, props) => {
  let children = null
  if(props !== null)
    children = props.children;
  if (typeof tag === "function")
    return tag(props, children);
  return null
}
  
module.exports = {jsx}