---
logical: "principalobjectaccess"
display: "principalobjectaccess"
entitySetName: "principalobjectaccessset"
primaryId: "principalobjectaccessid"
tableType: "Standard"
ownership: "None"
---

# principalobjectaccess

## Identity

| Property | Value |
| --- | --- |
| Logical name | `principalobjectaccess` |
| Display name | principalobjectaccess |
| Schema name | `PrincipalObjectAccess` |
| Entity set (Web API) | `principalobjectaccessset` |
| Primary id attribute | `principalobjectaccessid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/principalobjectaccessset?$select=&$top=10
GET /api/data/v9.2/principalobjectaccessset(<guid>)
POST /api/data/v9.2/principalobjectaccessset
PATCH /api/data/v9.2/principalobjectaccessset(<guid>)
DELETE /api/data/v9.2/principalobjectaccessset(<guid>)
```

## Attributes

Writable: **8** · Read-only: **3**

### Writable

`AccessRightsMask`, `ChangedOn`, `InheritedAccessRightsMask`, `ObjectTypeCode`, `PrincipalObjectAccessId`, `PrincipalTypeCode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ObjectId`, `PrincipalId`, `VersionNumber`

## Relationships




## Source

Generated from [principalobjectaccess.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/principalobjectaccess.md) on 2026-05-06.