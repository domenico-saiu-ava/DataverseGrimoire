---
logical: "msdyn_leadmodelconfig"
display: "LeadModelConfig"
entitySetName: "msdyn_leadmodelconfigs"
primaryId: "msdyn_leadmodelconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# LeadModelConfig

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_leadmodelconfig` |
| Display name | LeadModelConfig |
| Display (plural) | LeadModelConfig |
| Schema name | `msdyn_leadmodelconfig` |
| Entity set (Web API) | `msdyn_leadmodelconfigs` |
| Primary id attribute | `msdyn_leadmodelconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_leadmodelconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_leadmodelconfigs(<guid>)
POST /api/data/v9.2/msdyn_leadmodelconfigs
PATCH /api/data/v9.2/msdyn_leadmodelconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_leadmodelconfigs(<guid>)
```

## Attributes

Writable: **25** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_activeleadvalue`, `msdyn_appliedon`, `msdyn_createonfield`, `msdyn_disqualificationvalue`, `msdyn_featurestate`, `msdyn_isstandardentity`, `msdyn_leadentityid`, `msdyn_leadentityname`, `msdyn_leadformid`, `msdyn_leadformname`, `msdyn_leadmodelconfigid`, `msdyn_leadviewid`, `msdyn_leadviewname`, `msdyn_modifiedonfield`, `msdyn_name`, `msdyn_predictionname`, `msdyn_qualificationvalue`, `msdyn_statusfield`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_leadmodelconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_leadmodelconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_leadmodelconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_leadmodelconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_leadmodelconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_leadmodelconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_leadmodelconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_leadmodelconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_leadmodelconfig_SyncErrors` | [msdyn_leadmodelconfig](msdyn_leadmodelconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadmodelconfig` |
| `msdyn_leadmodelconfig_DuplicateMatchingRecord` | [msdyn_leadmodelconfig](msdyn_leadmodelconfig.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_leadmodelconfig` |
| `msdyn_leadmodelconfig_DuplicateBaseRecord` | [msdyn_leadmodelconfig](msdyn_leadmodelconfig.md) | `baserecordid` | `baserecordid_msdyn_leadmodelconfig` |
| `msdyn_leadmodelconfig_AsyncOperations` | [msdyn_leadmodelconfig](msdyn_leadmodelconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadmodelconfig` |
| `msdyn_leadmodelconfig_MailboxTrackingFolders` | [msdyn_leadmodelconfig](msdyn_leadmodelconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadmodelconfig` |
| `msdyn_leadmodelconfig_UserEntityInstanceDatas` | [msdyn_leadmodelconfig](msdyn_leadmodelconfig.md) | `objectid` | `objectid_msdyn_leadmodelconfig` |
| `msdyn_leadmodelconfig_ProcessSession` | [msdyn_leadmodelconfig](msdyn_leadmodelconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadmodelconfig` |
| `msdyn_leadmodelconfig_BulkDeleteFailures` | [msdyn_leadmodelconfig](msdyn_leadmodelconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadmodelconfig` |
| `msdyn_leadmodelconfig_PrincipalObjectAttributeAccesses` | [msdyn_leadmodelconfig](msdyn_leadmodelconfig.md) | `objectid` | `objectid_msdyn_leadmodelconfig` |


## Source

Generated from [msdyn_leadmodelconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_leadmodelconfig')) on 2026-05-07.