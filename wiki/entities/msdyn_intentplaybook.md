---
logical: "msdyn_intentplaybook"
display: "Intent Playbook"
entitySetName: "msdyn_intentplaybooks"
primaryId: "msdyn_intentplaybookid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Intent Playbook

This table contains records of intent playbooks.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentplaybook` |
| Display name | Intent Playbook |
| Display (plural) | Intent Playbooks |
| Schema name | `msdyn_intentplaybook` |
| Entity set (Web API) | `msdyn_intentplaybooks` |
| Primary id attribute | `msdyn_intentplaybookid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentplaybooks?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentplaybooks(<guid>)
POST /api/data/v9.2/msdyn_intentplaybooks
PATCH /api/data/v9.2/msdyn_intentplaybooks(<guid>)
DELETE /api/data/v9.2/msdyn_intentplaybooks(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_description`, `msdyn_intentfamilyid`, `msdyn_intentplaybookId`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_intentplaybook` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_intentplaybook_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentplaybook_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentplaybook_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentplaybook_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_intentplaybook_msdyn_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `owner_msdyn_intentplaybook` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_intentplaybook` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_intentplaybook` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentplaybook_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentplaybook_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentplaybook_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_intentplaybook_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_intentplaybook_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentplaybook_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_intentplaybook_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentplaybook_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentplaybookmap_msdyn_intentplaybook` | _n/a_ | `msdyn_intentplaybookid` | _n/a_ |
| `msdyn_intentplaybookmap_msdyn_referenceplaybookid_msdyn_intentplaybook` | _n/a_ | `msdyn_referenceplaybookid` | _n/a_ |


## Source

Generated from [msdyn_intentplaybook.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_intentplaybook.md) on 2026-05-06.