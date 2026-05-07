---
logical: "listmember"
display: "Marketing List Member"
entitySetName: "listmembers"
primaryId: "listmemberid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Marketing List Member

Item in a marketing list.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `listmember` |
| Display name | Marketing List Member |
| Display (plural) | Marketing List Members |
| Schema name | `ListMember` |
| Entity set (Web API) | `listmembers` |
| Primary id attribute | `listmemberid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/listmembers?$select=name&$top=10
GET /api/data/v9.2/listmembers(<guid>)
POST /api/data/v9.2/listmembers
PATCH /api/data/v9.2/listmembers(<guid>)
DELETE /api/data/v9.2/listmembers(<guid>)
```

## Attributes

Writable: **10** · Read-only: **11**

### Writable

`EntityId`, `EntityIdTypeCode`, `EntityType`, `ImportSequenceNumber`, `ListId`, `ListMemberId`, `Name`, `OverriddenCreatedOn`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_listmember_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_listmember_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_listmember_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_listmember_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `listmember_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `listmember_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `listmember_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `listmember_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |

### Many-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `listaccount_association` | _n/a_ | _n/a_ | _n/a_ |
| `listcontact_association` | _n/a_ | _n/a_ | _n/a_ |
| `listlead_association` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [listmember.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/listmember.md) on 2026-05-06.