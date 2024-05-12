// Video explicative : https://grafikart.fr/tutoriels/typescript-type-challenges-1960#autoplay

declare module 'alpinejs' { 

  // ici le but est crée un type pour $el et que cela soit reconnect sur decrement
  type AlpineInstance = {
    readonly $el: HTMLElement
  }

  type WithAlpineInstance<T> = {
    [Key in keyof T ]: T[Key] extends (...args: infer Args) => infer Return ? (this: T & AlpineInstance, ...args: Args) => Return: T[Key]
  } 

    const Alpine:{
      start(): void
      data<T>(componentName: string, callback: (params: any) => WithAlpineInstance<T>): void
    }

    export {Alpine}

}