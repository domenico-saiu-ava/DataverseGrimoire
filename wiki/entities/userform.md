---
logical: "userform"
display: "User Dashboard"
entitySetName: "userforms"
primaryId: "userformid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# User Dashboard

User-owned dashboards.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `userform` |
| Display name | User Dashboard |
| Display (plural) | User Dashboards |
| Schema name | `UserForm` |
| Entity set (Web API) | `userforms` |
| Primary id attribute | `userformid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/userforms?$select=name&$top=10
GET /api/data/v9.2/userforms(<guid>)
POST /api/data/v9.2/userforms
PATCH /api/data/v9.2/userforms(<guid>)
DELETE /api/data/v9.2/userforms(<guid>)
```

## Attributes

Writable: **10** · Read-only: **12**

### Writable

`Description`, `FormJson`, `FormXml`, `IsTabletEnabled`, `Name`, `ObjectTypeCode`, `OwnerId`, `OwnerIdType`, `Type`, `UserFormId`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_userform` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_userform_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_userform_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_userformbase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_userformbase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_userform` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_userform` | [team](team.md) | `owningteam` | `owningteam` |
| `user_userform` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `UserForm_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `UserForm_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [userform.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/userform.md) on 2026-05-06.