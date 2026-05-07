---
logical: "msdyn_opportunitymodelconfig"
display: "OpportunityModelConfig"
entitySetName: "msdyn_opportunitymodelconfigs"
primaryId: "msdyn_opportunitymodelconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# OpportunityModelConfig

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_opportunitymodelconfig` |
| Display name | OpportunityModelConfig |
| Display (plural) | OpportunityModelConfig |
| Schema name | `msdyn_opportunitymodelconfig` |
| Entity set (Web API) | `msdyn_opportunitymodelconfigs` |
| Primary id attribute | `msdyn_opportunitymodelconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_opportunitymodelconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_opportunitymodelconfigs(<guid>)
POST /api/data/v9.2/msdyn_opportunitymodelconfigs
PATCH /api/data/v9.2/msdyn_opportunitymodelconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_opportunitymodelconfigs(<guid>)
```

## Attributes

Writable: **25** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_activeopportunityvalue`, `msdyn_appliedon`, `msdyn_createonfield`, `msdyn_disqualificationvalue`, `msdyn_featurestate`, `msdyn_isstandardentity`, `msdyn_modifiedonfield`, `msdyn_name`, `msdyn_opportunityentityid`, `msdyn_opportunityentityname`, `msdyn_opportunityformid`, `msdyn_opportunityformname`, `msdyn_opportunitymodelconfigid`, `msdyn_opportunityviewid`, `msdyn_opportunityviewname`, `msdyn_predictionname`, `msdyn_qualificationvalue`, `msdyn_statusfield`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_opportunitymodelconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_opportunitymodelconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_opportunitymodelconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_opportunitymodelconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_opportunitymodelconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_opportunitymodelconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_opportunitymodelconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_opportunitymodelconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_opportunitymodelconfig_SyncErrors` | [msdyn_opportunitymodelconfig](msdyn_opportunitymodelconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunitymodelconfig` |
| `msdyn_opportunitymodelconfig_DuplicateMatchingRecord` | [msdyn_opportunitymodelconfig](msdyn_opportunitymodelconfig.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_opportunitymodelconfig` |
| `msdyn_opportunitymodelconfig_DuplicateBaseRecord` | [msdyn_opportunitymodelconfig](msdyn_opportunitymodelconfig.md) | `baserecordid` | `baserecordid_msdyn_opportunitymodelconfig` |
| `msdyn_opportunitymodelconfig_AsyncOperations` | [msdyn_opportunitymodelconfig](msdyn_opportunitymodelconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunitymodelconfig` |
| `msdyn_opportunitymodelconfig_MailboxTrackingFolders` | [msdyn_opportunitymodelconfig](msdyn_opportunitymodelconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunitymodelconfig` |
| `msdyn_opportunitymodelconfig_UserEntityInstanceDatas` | [msdyn_opportunitymodelconfig](msdyn_opportunitymodelconfig.md) | `objectid` | `objectid_msdyn_opportunitymodelconfig` |
| `msdyn_opportunitymodelconfig_ProcessSession` | [msdyn_opportunitymodelconfig](msdyn_opportunitymodelconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunitymodelconfig` |
| `msdyn_opportunitymodelconfig_BulkDeleteFailures` | [msdyn_opportunitymodelconfig](msdyn_opportunitymodelconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunitymodelconfig` |
| `msdyn_opportunitymodelconfig_PrincipalObjectAttributeAccesses` | [msdyn_opportunitymodelconfig](msdyn_opportunitymodelconfig.md) | `objectid` | `objectid_msdyn_opportunitymodelconfig` |


## Source

Generated from [msdyn_opportunitymodelconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_opportunitymodelconfig')) on 2026-05-07.