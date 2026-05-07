---
logical: "msdyn_pmtab"
display: "PM Tab"
entitySetName: "msdyn_pmtabs"
primaryId: "msdyn_pmtabid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# PM Tab

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_pmtab` |
| Display name | PM Tab |
| Display (plural) | PM Tabs |
| Schema name | `msdyn_pmtab` |
| Entity set (Web API) | `msdyn_pmtabs` |
| Primary id attribute | `msdyn_pmtabid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_pmtabs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_pmtabs(<guid>)
POST /api/data/v9.2/msdyn_pmtabs
PATCH /api/data/v9.2/msdyn_pmtabs(<guid>)
DELETE /api/data/v9.2/msdyn_pmtabs(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_configuration`, `msdyn_isprivate`, `msdyn_name`, `msdyn_order`, `msdyn_pmtabId`, `msdyn_pmviewId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_pmtab` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_pmtab_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pmtab_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pmtab_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pmtab_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_pmtab_pmviewid_msdyn_pmview` | [msdyn_pmview](msdyn_pmview.md) | `msdyn_pmviewid` | `msdyn_pmviewId` |
| `owner_msdyn_pmtab` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_pmtab` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_pmtab` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_pmtab_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmtab_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmtab_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_pmtab_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_pmtab_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmtab_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_pmtab_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmtab_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_pmtab.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_pmtab.md) on 2026-05-06.