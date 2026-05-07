---
logical: "msdynmkt_preferencecenter"
display: "Centro preferenze"
entitySetName: "msdynmkt_preferencecenters"
primaryId: "msdynmkt_preferencecenterid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Centro preferenze

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_preferencecenter` |
| Display name | Centro preferenze |
| Display (plural) | Centri preferenze |
| Schema name | `msdynmkt_preferencecenter` |
| Entity set (Web API) | `msdynmkt_preferencecenters` |
| Primary id attribute | `msdynmkt_preferencecenterid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_preferencecenters?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_preferencecenters(<guid>)
POST /api/data/v9.2/msdynmkt_preferencecenters
PATCH /api/data/v9.2/msdynmkt_preferencecenters(<guid>)
DELETE /api/data/v9.2/msdynmkt_preferencecenters(<guid>)
```

## Attributes

Writable: **16** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdynmkt_complianceid`, `msdynmkt_designerhtml`, `msdynmkt_errormessage`, `msdynmkt_formhtml`, `msdynmkt_isdefault`, `msdynmkt_name`, `msdynmkt_preferencecenterid`, `msdynmkt_successmessage`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_preferencecenter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_preferencecenter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_preferencecenter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_preferencecenter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_preferencecenter` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_preferencecenter` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_preferencecenter` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_preferencecenter` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdynmkt_msdynmkt_compliancesettings4_msdynmkt_pre` | [msdynmkt_compliancesettings4](msdynmkt_compliancesettings4.md) | `msdynmkt_complianceid` | `msdynmkt_ComplianceId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_preferencecenter_SyncErrors` | [msdynmkt_preferencecenter](msdynmkt_preferencecenter.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_preferencecenter` |
| `msdynmkt_preferencecenter_DuplicateMatchingRecord` | [msdynmkt_preferencecenter](msdynmkt_preferencecenter.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_preferencecenter` |
| `msdynmkt_preferencecenter_DuplicateBaseRecord` | [msdynmkt_preferencecenter](msdynmkt_preferencecenter.md) | `baserecordid` | `baserecordid_msdynmkt_preferencecenter` |
| `msdynmkt_preferencecenter_AsyncOperations` | [msdynmkt_preferencecenter](msdynmkt_preferencecenter.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_preferencecenter` |
| `msdynmkt_preferencecenter_MailboxTrackingFolders` | [msdynmkt_preferencecenter](msdynmkt_preferencecenter.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_preferencecenter` |
| `msdynmkt_preferencecenter_UserEntityInstanceDatas` | [msdynmkt_preferencecenter](msdynmkt_preferencecenter.md) | `objectid` | `objectid_msdynmkt_preferencecenter` |
| `msdynmkt_preferencecenter_ProcessSession` | [msdynmkt_preferencecenter](msdynmkt_preferencecenter.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_preferencecenter` |
| `msdynmkt_preferencecenter_BulkDeleteFailures` | [msdynmkt_preferencecenter](msdynmkt_preferencecenter.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_preferencecenter` |
| `msdynmkt_preferencecenter_PrincipalObjectAttributeAccesses` | [msdynmkt_preferencecenter](msdynmkt_preferencecenter.md) | `objectid` | `objectid_msdynmkt_preferencecenter` |


## Source

Generated from [msdynmkt_preferencecenter (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_preferencecenter')) on 2026-05-07.