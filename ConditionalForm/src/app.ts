type HTMLAttributes = {
    img:{
        alt: string
    },
    input:{
        type?: 'text' | 'number'
        name?: string
    },
    textarea:{
        cols?: number,
        name?: string
    }
}

type HTMLNode<TagName> = {
    tagName: TagName,
    class?: string,
    id?: string,
    attributes?: TagName extends keyof HTMLAttributes ? HTMLAttributes[TagName] : never
}
/////////////////////////////////
// 1er possibilité tres basic //
/////////////////////////////////

// type HTMLShape = HTMLNode<'p'> | HTMLNode<'input'> | HTMLNode<'img'> | HTMLNode<'textarea'>
// type HTMLShape = HTMLNode<keyof HTMLAttributes>

//////////////////////
// 2eme possiblité //
/////////////////////
type ValueOf<T>= T[keyof T] // une union type qui renvoi toutes les valeurs possibles

type HTMLShapes = {
    [Key in keyof HTMLAttributes]: HTMLNode<Key>
}
type HTMLShape = ValueOf<HTMLShapes>


// ICI NOS OBJETS DEPENDENT DU SHAPE 

const img: HTMLShape = {
    tagName: 'img',
    class: '.demo',
    attributes: {
        alt: 'demo'
    }
}

const input: HTMLShape = {
    tagName: 'input',
    attributes: {
        name: 'demo',
        type: 'text'
    }
}

const textarea: HTMLShape = {
    tagName: 'textarea',
    attributes: {
         cols: 3,
         name: 'text'
    }
}