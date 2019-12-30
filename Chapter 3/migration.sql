IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

IF SCHEMA_ID(N'Store') IS NULL EXEC(N'CREATE SCHEMA [Store];');

GO

CREATE TABLE [Store].[Categories] (
    [Id] int NOT NULL IDENTITY,
    [TimeStamp] rowversion NULL,
    [CategoryName] nvarchar(50) NULL,
    CONSTRAINT [PK_Categories] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [Store].[Customers] (
    [Id] int NOT NULL IDENTITY,
    [TimeStamp] rowversion NULL,
    [FullName] nvarchar(50) NULL,
    [EmailAddress] nvarchar(50) NOT NULL,
    [Password] nvarchar(50) NOT NULL,
    CONSTRAINT [PK_Customers] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [Store].[Products] (
    [Id] int NOT NULL IDENTITY,
    [TimeStamp] rowversion NULL,
    [Description] nvarchar(3800) NULL,
    [ModelNumber] nvarchar(50) NULL,
    [ModelName] nvarchar(50) NULL,
    [ProductImage] nvarchar(150) NULL,
    [ProductImageLarge] nvarchar(150) NULL,
    [ProductImageThumb] nvarchar(150) NULL,
    [IsFeatured] bit NOT NULL,
    [UnitCost] money NOT NULL,
    [CurrentPrice] money NOT NULL,
    [UnitsInStock] int NOT NULL,
    [CategoryId] int NOT NULL,
    CONSTRAINT [PK_Products] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Products_Categories_CategoryId] FOREIGN KEY ([CategoryId]) REFERENCES [Store].[Categories] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [Store].[Orders] (
    [Id] int NOT NULL IDENTITY,
    [TimeStamp] rowversion NULL,
    [OrderDate] datetime NOT NULL DEFAULT (getdate()),
    [ShipDate] datetime NOT NULL DEFAULT (getdate()),
    [CustomerId] int NOT NULL,
    CONSTRAINT [PK_Orders] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Orders_Customers_CustomerId] FOREIGN KEY ([CustomerId]) REFERENCES [Store].[Customers] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [Store].[ShoppingCartRecords] (
    [Id] int NOT NULL IDENTITY,
    [TimeStamp] rowversion NULL,
    [DateCreated] datetime NULL DEFAULT (getdate()),
    [CustomerId] int NOT NULL,
    [Quantity] int NOT NULL DEFAULT 1,
    [ProductId] int NOT NULL,
    CONSTRAINT [PK_ShoppingCartRecords] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ShoppingCartRecords_Customers_CustomerId] FOREIGN KEY ([CustomerId]) REFERENCES [Store].[Customers] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_ShoppingCartRecords_Products_ProductId] FOREIGN KEY ([ProductId]) REFERENCES [Store].[Products] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [Store].[OrderDetails] (
    [Id] int NOT NULL IDENTITY,
    [TimeStamp] rowversion NULL,
    [OrderId] int NOT NULL,
    [ProductId] int NOT NULL,
    [Quantity] int NOT NULL,
    [UnitCost] money NOT NULL,
    CONSTRAINT [PK_OrderDetails] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_OrderDetails_Orders_OrderId] FOREIGN KEY ([OrderId]) REFERENCES [Store].[Orders] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_OrderDetails_Products_ProductId] FOREIGN KEY ([ProductId]) REFERENCES [Store].[Products] ([Id]) ON DELETE CASCADE
);

GO

CREATE UNIQUE INDEX [IX_Customers] ON [Store].[Customers] ([EmailAddress]);

GO

CREATE INDEX [IX_OrderDetails_OrderId] ON [Store].[OrderDetails] ([OrderId]);

GO

CREATE INDEX [IX_OrderDetails_ProductId] ON [Store].[OrderDetails] ([ProductId]);

GO

CREATE INDEX [IX_Orders_CustomerId] ON [Store].[Orders] ([CustomerId]);

GO

CREATE INDEX [IX_Products_CategoryId] ON [Store].[Products] ([CategoryId]);

GO

CREATE INDEX [IX_ShoppingCartRecords_CustomerId] ON [Store].[ShoppingCartRecords] ([CustomerId]);

GO

CREATE INDEX [IX_ShoppingCartRecords_ProductId] ON [Store].[ShoppingCartRecords] ([ProductId]);

GO

CREATE UNIQUE INDEX [IX_ShoppingCart] ON [Store].[ShoppingCartRecords] ([Id], [ProductId], [CustomerId]);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20190202042711_Initial', N'2.1.1-rtm-30846');

GO

