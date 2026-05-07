---
logical: "msdyn_appprofilerolemapping"
display: "App profile role mapping"
entitySetName: "msdyn_appprofilerolemappings"
primaryId: "msdyn_appprofilerolemappingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# App profile role mapping

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_appprofilerolemapping` |
| Display name | App profile role mapping |
| Display (plural) | App profile role mappings |
| Schema name | `msdyn_appprofilerolemapping` |
| Entity set (Web API) | `msdyn_appprofilerolemappings` |
| Primary id attribute | `msdyn_appprofilerolemappingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_appprofilerolemappings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_appprofilerolemappings(<guid>)
POST /api/data/v9.2/msdyn_appprofilerolemappings
PATCH /api/data/v9.2/msdyn_appprofilerolemappings(<guid>)
DELETE /api/data/v9.2/msdyn_appprofilerolemappings(<guid>)
```

## Attributes

Writable: **14** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_appprofileid`, `msdyn_appprofilerolemappingId`, `msdyn_name`, `msdyn_securityroleid`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_appprofilerolemapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_appprofilerolemapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_appprofilerolemapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_appprofilerolemapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_appprofilerolemapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_appconfiguration_msdyn_appprofilerolemapping` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | `msdyn_appprofileid` | `msdyn_appprofileid` |
| `owner_msdyn_appprofilerolemapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `role_msdyn_appprofilerolemapping` | [role](role.md) | `msdyn_securityroleid` | `msdyn_securityroleid` |
| `team_msdyn_appprofilerolemapping` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_appprofilerolemapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_appprofilerolemapping_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_appprofilerolemapping_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_appprofilerolemapping_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_appprofilerolemapping_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_appprofilerolemapping_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_appprofilerolemapping_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_appprofilerolemapping_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_appprofilerolemapping_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_appprofilerolemapping.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_appprofilerolemapping.md) on 2026-05-06.