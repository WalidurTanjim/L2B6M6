// Utility Types

type Product = {
    id: number;
    name: string;
    brand: string;
    price: number;
    stock: number;
    color?: string;
}

// 
type ProductSummary1 = Pick<Product, "id" | "name" | "brand">;

// remove type
type ProductWithoutStock1 = Omit<Product, "stock" | "color">;

// required type
type ProductWithColor1 = Required<Product>;

const product: ProductWithColor1 = {
    id: 1,
    name: 'Mouse',
    brand: 'ASUS',
    price: 1500,
    stock: 15,
    color: 'Black'
}

// optional type
type OptionalProduct = Partial<Product>;

// readonly type
type ReadonlyProduct = Readonly<Product>;

// record: when we try to declare an object. each key must be a string but value can be anything. it will give 100% type safety. no one can declare an object like this: "222: 'walid'"
type RecordProduct = Record<string, unknown>;