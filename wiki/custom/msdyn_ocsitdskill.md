---
logical: "msdyn_ocsitdskill"
display: "Mapping di caratteristiche"
entitySetName: "msdyn_ocsitdskills"
primaryId: "msdyn_ocsitdskillid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Mapping di caratteristiche

Indica il mapping delle competenze dai dati di training alle caratteristiche

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocsitdskill` |
| Display name | Mapping di caratteristiche |
| Display (plural) | Mapping di caratteristiche |
| Schema name | `msdyn_ocsitdskill` |
| Entity set (Web API) | `msdyn_ocsitdskills` |
| Primary id attribute | `msdyn_ocsitdskillid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocsitdskills?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocsitdskills(<guid>)
POST /api/data/v9.2/msdyn_ocsitdskills
PATCH /api/data/v9.2/msdyn_ocsitdskills(<guid>)
DELETE /api/data/v9.2/msdyn_ocsitdskills(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_ocsitdskillid`, `msdyn_ocsitrainingdataid`, `msdyn_skillid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocsitdskill_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocsitdskill_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocsitdskill_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocsitdskill_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocsitdskill` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocsitdskill` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocsitdskill` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocsitdskill` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_ocsitdskill_ocsitrainingdataid` | [msdyn_ocsitrainingdata](msdyn_ocsitrainingdata.md) | `msdyn_ocsitrainingdataid` | `msdyn_ocsitrainingdataid` |
| `msdyn_ocsitdskill_skillid_Characteristic` | [characteristic](characteristic.md) | `msdyn_skillid` | `msdyn_skillid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocsitdskill_SyncErrors` | [msdyn_ocsitdskill](msdyn_ocsitdskill.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsitdskill` |
| `msdyn_ocsitdskill_DuplicateMatchingRecord` | [msdyn_ocsitdskill](msdyn_ocsitdskill.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocsitdskill` |
| `msdyn_ocsitdskill_DuplicateBaseRecord` | [msdyn_ocsitdskill](msdyn_ocsitdskill.md) | `baserecordid` | `baserecordid_msdyn_ocsitdskill` |
| `msdyn_ocsitdskill_AsyncOperations` | [msdyn_ocsitdskill](msdyn_ocsitdskill.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsitdskill` |
| `msdyn_ocsitdskill_MailboxTrackingFolders` | [msdyn_ocsitdskill](msdyn_ocsitdskill.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsitdskill` |
| `msdyn_ocsitdskill_UserEntityInstanceDatas` | [msdyn_ocsitdskill](msdyn_ocsitdskill.md) | `objectid` | `objectid_msdyn_ocsitdskill` |
| `msdyn_ocsitdskill_ProcessSession` | [msdyn_ocsitdskill](msdyn_ocsitdskill.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsitdskill` |
| `msdyn_ocsitdskill_BulkDeleteFailures` | [msdyn_ocsitdskill](msdyn_ocsitdskill.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsitdskill` |
| `msdyn_ocsitdskill_PrincipalObjectAttributeAccesses` | [msdyn_ocsitdskill](msdyn_ocsitdskill.md) | `objectid` | `objectid_msdyn_ocsitdskill` |


## Source

Generated from [msdyn_ocsitdskill (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocsitdskill')) on 2026-05-07.