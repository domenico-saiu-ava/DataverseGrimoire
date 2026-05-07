---
logical: "msdyn_duplicateleadmapping"
display: "Mapping lead duplicato"
entitySetName: "msdyn_duplicateleadmappings"
primaryId: "msdyn_duplicateleadmappingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Mapping lead duplicato

Questa entità viene utilizzata per connettere il lead di base ai lead duplicati

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_duplicateleadmapping` |
| Display name | Mapping lead duplicato |
| Display (plural) | Mapping lead duplicati |
| Schema name | `msdyn_duplicateleadmapping` |
| Entity set (Web API) | `msdyn_duplicateleadmappings` |
| Primary id attribute | `msdyn_duplicateleadmappingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_duplicateleadmappings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_duplicateleadmappings(<guid>)
POST /api/data/v9.2/msdyn_duplicateleadmappings
PATCH /api/data/v9.2/msdyn_duplicateleadmappings(<guid>)
DELETE /api/data/v9.2/msdyn_duplicateleadmappings(<guid>)
```

## Attributes

Writable: **17** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_baseleadrecord`, `msdyn_dismissalreason`, `msdyn_dismissedat`, `msdyn_dismissedby`, `msdyn_duplicateleadmappingid`, `msdyn_duplicateleadrecord`, `msdyn_name`, `msdyn_parsedreason`, `msdyn_reason`, `msdyn_score`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_duplicateleadmapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_duplicateleadmapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_duplicateleadmapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_duplicateleadmapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_duplicateleadmapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_duplicateleadmapping` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_duplicateleadmapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_duplicateleadmapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_lead_msdyn_duplicateleadmapping` | [lead](lead.md) | `msdyn_duplicateleadrecord` | `msdyn_duplicateleadrecord` |
| `msdyn_lead_msdyn_duplicateleadmapping_BaseLeadRecord` | [lead](lead.md) | `msdyn_baseleadrecord` | `msdyn_baseleadrecord` |
| `msdyn_systemuser_msdyn_duplicateleadmapping_DismissedBy` | [systemuser](systemuser.md) | `msdyn_dismissedby` | `msdyn_DismissedBy` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_duplicateleadmapping_SyncErrors` | [msdyn_duplicateleadmapping](msdyn_duplicateleadmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_duplicateleadmapping` |
| `msdyn_duplicateleadmapping_DuplicateMatchingRecord` | [msdyn_duplicateleadmapping](msdyn_duplicateleadmapping.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_duplicateleadmapping` |
| `msdyn_duplicateleadmapping_DuplicateBaseRecord` | [msdyn_duplicateleadmapping](msdyn_duplicateleadmapping.md) | `baserecordid` | `baserecordid_msdyn_duplicateleadmapping` |
| `msdyn_duplicateleadmapping_AsyncOperations` | [msdyn_duplicateleadmapping](msdyn_duplicateleadmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_duplicateleadmapping` |
| `msdyn_duplicateleadmapping_MailboxTrackingFolders` | [msdyn_duplicateleadmapping](msdyn_duplicateleadmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_duplicateleadmapping` |
| `msdyn_duplicateleadmapping_UserEntityInstanceDatas` | [msdyn_duplicateleadmapping](msdyn_duplicateleadmapping.md) | `objectid` | `objectid_msdyn_duplicateleadmapping` |
| `msdyn_duplicateleadmapping_ProcessSession` | [msdyn_duplicateleadmapping](msdyn_duplicateleadmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_duplicateleadmapping` |
| `msdyn_duplicateleadmapping_BulkDeleteFailures` | [msdyn_duplicateleadmapping](msdyn_duplicateleadmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_duplicateleadmapping` |
| `msdyn_duplicateleadmapping_PrincipalObjectAttributeAccesses` | [msdyn_duplicateleadmapping](msdyn_duplicateleadmapping.md) | `objectid` | `objectid_msdyn_duplicateleadmapping` |


## Source

Generated from [msdyn_duplicateleadmapping (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_duplicateleadmapping')) on 2026-05-07.