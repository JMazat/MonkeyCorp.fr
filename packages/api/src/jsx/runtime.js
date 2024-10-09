const declarations = [] //TODO séparer dans un module spécifique
//TODO meilleurs noms

export const jsx = (tag, props, ...children) => {
  // permet de gérer children via props ou seul
  if(props != null)
    props.children = children;
  else
    props = {children: children}

  if (typeof tag !== "function")
    throw Error("Illegal argument: Only use JSX elements declared as functions.")

  // retourne l'objet qui sera accessible par les parents du tag
  const declaration = {
    id: declarations.length,
    tag: tag,
    props: props,
    children: children
  }
  declarations.push(declaration)
  return declaration
}

export const frag = (tag, props, ...children) => {
  throw Error("Not implemented: Do not use Fragments for now.")
}

export function declare() {
  // comme les tags sont évalués de bas en haut, il faut lancer les fonctions
  // à l'envers pour avoir une déclaration allant de haut en bas
  for(let i = declarations.length - 1; i >= 0; i--){
    const tag = declarations[i]
    tag.tag(tag.props, tag.children)
  }
}

function spread_props(child, props) {
  Object.assign(declarations[child.id].props, props)
}

// set props for the given children
export function set_context(children, props) {
  for(let child of children) {
    spread_props(child, props)
  }
}

// recursively set props for the given children and their children...
export function set_context_deep(children, props) {
  set_context(children, props)
  
  for(let child of children)
    if(child.children.length > 0)
      set_context_deep(child.children, props)
}
