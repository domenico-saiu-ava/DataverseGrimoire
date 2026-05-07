---
logical: "msdyn_pmtab"
display: "PM Tab"
entitySetName: "msdyn_pmtabs"
primaryId: "msdyn_pmtabid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_configuration`, `msdyn_isprivate`, `msdyn_name`, `msdyn_order`, `msdyn_pmtabid`, `msdyn_pmviewid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_pmtab_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pmtab_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pmtab_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pmtab_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_pmtab` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_pmtab` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_pmtab` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_pmtab` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_pmtab_pmviewid_msdyn_pmview` | [msdyn_pmview](msdyn_pmview.md) | `msdyn_pmviewid` | `msdyn_pmviewId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_pmtab_SyncErrors` | [msdyn_pmtab](msdyn_pmtab.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmtab` |
| `msdyn_pmtab_DuplicateMatchingRecord` | [msdyn_pmtab](msdyn_pmtab.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pmtab` |
| `msdyn_pmtab_DuplicateBaseRecord` | [msdyn_pmtab](msdyn_pmtab.md) | `baserecordid` | `baserecordid_msdyn_pmtab` |
| `msdyn_pmtab_AsyncOperations` | [msdyn_pmtab](msdyn_pmtab.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmtab` |
| `msdyn_pmtab_MailboxTrackingFolders` | [msdyn_pmtab](msdyn_pmtab.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmtab` |
| `msdyn_pmtab_UserEntityInstanceDatas` | [msdyn_pmtab](msdyn_pmtab.md) | `objectid` | `objectid_msdyn_pmtab` |
| `msdyn_pmtab_ProcessSession` | [msdyn_pmtab](msdyn_pmtab.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmtab` |
| `msdyn_pmtab_BulkDeleteFailures` | [msdyn_pmtab](msdyn_pmtab.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmtab` |
| `msdyn_pmtab_PrincipalObjectAttributeAccesses` | [msdyn_pmtab](msdyn_pmtab.md) | `objectid` | `objectid_msdyn_pmtab` |


## Source

Generated from [msdyn_pmtab (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_pmtab')) on 2026-05-07.