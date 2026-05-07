---
logical: "category"
display: "Category"
entitySetName: "categories"
primaryId: "categoryid"
primaryName: "title"
tableType: "Standard"
ownership: "UserOwned"
---

# Category

Entity for categorizing records to make it easier for your customers to find them on portals and through search.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `category` |
| Display name | Category |
| Display (plural) | Categories |
| Schema name | `Category` |
| Entity set (Web API) | `categories` |
| Primary id attribute | `categoryid` |
| Primary name attribute | `title` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/categories?$select=title&$top=10
GET /api/data/v9.2/categories(<guid>)
POST /api/data/v9.2/categories
PATCH /api/data/v9.2/categories(<guid>)
DELETE /api/data/v9.2/categories(<guid>)
```

## Attributes

Writable: **11** · Read-only: **12**

### Writable

`CategoryId`, `CategoryNumber`, `Description`, `ImportSequenceNumber`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ParentCategoryId`, `SequenceNumber`, `Title`, `TransactionCurrencyId`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_category` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `category_parent_category` | [category](category.md) | `parentcategoryid` | `parentcategoryid` |
| `lk_category_createdby` | [systemuser](systemuser.md) | `createdby` | `lk_category_createdby` |
| `lk_category_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `lk_category_createdonbehalfby` |
| `lk_category_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `lk_category_modifiedby` |
| `lk_category_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `lk_category_modifiedonbehalfby` |
| `owner_categories` | [owner](owner.md) | `ownerid` | `ownerid` |
| `transactioncurrency_category` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `category_parent_category` | _n/a_ | `parentcategoryid` | _n/a_ |
| `Category_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `knowledgearticle_category` | [categoryid](categoryid.md) | _n/a_ | _n/a_ |

## Source

Generated from [category.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/category.md) on 2026-05-06.