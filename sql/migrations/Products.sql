CREATE TABLE IF NOT EXISTS Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(50) NOT NULL,
    SupplierID INT NOT NULL,
    CategoryID INT NOT NULL,
    Unit VARCHAR(30) NOT NULL,
    Price NUMERIC(10, 2) NOT NULL,
    FOREIGN KEY (SupplierID) REFERENCES SUPPLIERS(SupplierID),
    FOREIGN KEY (CategoryID) REFERENCES CATEGORIES(CategoryID)
);






