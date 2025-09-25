{
    class Pari<T, U> {
        constructor(private first: T, private second: U) {
        }
        getFirst(): T {
            return this.first
        }

        getSecond(): U {
            return this.second
        }
    }

    const pari1 = new Pari(18, "A")
    const pari2 = new Pari(10, 20)
    const pari3 = new Pari("B", "A")

}

{
    interface Repository<T> {
        add(item: T): void;
        get(id: number): T | undefined;
    }

    class InMemoryRepository<T> implements Repository<T> {
        private items: T[] = [];

        add(item: T): void {
            this.items.push(item);
        }

        get(id: number): T | undefined {
            return this.items[id];
        }
    }


}