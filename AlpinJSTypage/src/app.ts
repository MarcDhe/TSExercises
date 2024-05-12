import {Alpine} from "alpinejs";

Alpine.data('myComponent', function (initial: number = 0) {
  return {
      compteur: initial,
      increment () {
          this.compteur += 1
      },
      decrement () {
          this.compteur -= 1
          if (this.compteur < 0) {
              // $el fera référence à un élément HTML et aura comme type HTMLElement
              this.$el.style.display = "none"
          }
      },
      getCompteur () {
          return this.compteur
      }
  }
})
Alpine.start();