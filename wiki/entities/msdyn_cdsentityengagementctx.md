---
logical: "msdyn_cdsentityengagementctx"
display: "Entity Routing Context"
entitySetName: "msdyn_cdsentityengagementctxes"
primaryId: "msdyn_cdsentityengagementctxid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Entity Routing Context

Entity Routing Contexts

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_cdsentityengagementctx` |
| Display name | Entity Routing Context |
| Display (plural) | Entity Routing Contexts |
| Schema name | `msdyn_cdsentityengagementctx` |
| Entity set (Web API) | `msdyn_cdsentityengagementctxes` |
| Primary id attribute | `msdyn_cdsentityengagementctxid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_cdsentityengagementctxes?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_cdsentityengagementctxes(<guid>)
POST /api/data/v9.2/msdyn_cdsentityengagementctxes
PATCH /api/data/v9.2/msdyn_cdsentityengagementctxes(<guid>)
DELETE /api/data/v9.2/msdyn_cdsentityengagementctxes(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_cdsentityengagementctxId`, `msdyn_engagedentitysetname`, `msdyn_liveworkitemid`, `msdyn_name`, `msdyn_recordid`, `msdyn_workitemrelation`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_cdsentityengagementctx` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_cdsentityengagementctx_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_cdsentityengagementctx_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_cdsentityengagementctx_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_cdsentityengagementctx_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_ocliveworkitem_msdyn_cdsentityengagementctx_liveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_liveworkitemid` | `msdyn_liveworkitemid` |
| `owner_msdyn_cdsentityengagementctx` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_cdsentityengagementctx` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_cdsentityengagementctx` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_cdsentityengagementctx_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_cdsentityengagementctx_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_cdsentityengagementctx_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_cdsentityengagementctx_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_cdsentityengagementctx_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_cdsentityengagementctx_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_cdsentityengagementctx.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_cdsentityengagementctx.md) on 2026-05-06.