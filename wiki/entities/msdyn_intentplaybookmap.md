---
logical: "msdyn_intentplaybookmap"
display: "Intent playbook map"
entitySetName: "msdyn_intentplaybookmaps"
primaryId: "msdyn_intentplaybookmapid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Intent playbook map

This table contains records of intent playbook mappings.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentplaybookmap` |
| Display name | Intent playbook map |
| Display (plural) | Intent playbook maps |
| Schema name | `msdyn_intentplaybookmap` |
| Entity set (Web API) | `msdyn_intentplaybookmaps` |
| Primary id attribute | `msdyn_intentplaybookmapid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentplaybookmaps?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentplaybookmaps(<guid>)
POST /api/data/v9.2/msdyn_intentplaybookmaps
PATCH /api/data/v9.2/msdyn_intentplaybookmaps(<guid>)
DELETE /api/data/v9.2/msdyn_intentplaybookmaps(<guid>)
```

## Attributes

Writable: **16** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_intentfamilyid`, `msdyn_intentid`, `msdyn_intentplaybookid`, `msdyn_intentplaybookmapId`, `msdyn_name`, `msdyn_referenceplaybookid`, `msdyn_targetSource`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_intentplaybookmap` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_intentplaybookmap_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentplaybookmap_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentplaybookmap_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentplaybookmap_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_intentplaybookmap_msdyn_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `msdyn_intentplaybookmap_msdyn_intentid_msdyn_intent` | [msdyn_intent](msdyn_intent.md) | `msdyn_intentid` | `msdyn_intentid` |
| `msdyn_intentplaybookmap_msdyn_intentplaybook` | [msdyn_intentplaybook](msdyn_intentplaybook.md) | `msdyn_intentplaybookid` | `msdyn_intentplaybookid` |
| `msdyn_intentplaybookmap_msdyn_referenceplaybookid_msdyn_intentplaybook` | [msdyn_intentplaybook](msdyn_intentplaybook.md) | `msdyn_referenceplaybookid` | `msdyn_referenceplaybookid` |
| `owner_msdyn_intentplaybookmap` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_intentplaybookmap` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_intentplaybookmap` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentplaybookmap_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentplaybookmap_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentplaybookmap_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentplaybookmap_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_intentplaybookmap_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentplaybookmap_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_intentplaybookmap.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_intentplaybookmap.md) on 2026-05-06.