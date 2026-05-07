---
logical: "msdyn_predictionmodelstatus"
display: "Stato modello di previsione"
entitySetName: "msdyn_predictionmodelstatuses"
primaryId: "msdyn_predictionmodelstatusid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stato modello di previsione

Archivia i metadati sui modelli predittivi

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_predictionmodelstatus` |
| Display name | Stato modello di previsione |
| Display (plural) | Stati del modello di previsione |
| Schema name | `msdyn_predictionmodelstatus` |
| Entity set (Web API) | `msdyn_predictionmodelstatuses` |
| Primary id attribute | `msdyn_predictionmodelstatusid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_predictionmodelstatuses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_predictionmodelstatuses(<guid>)
POST /api/data/v9.2/msdyn_predictionmodelstatuses
PATCH /api/data/v9.2/msdyn_predictionmodelstatuses(<guid>)
DELETE /api/data/v9.2/msdyn_predictionmodelstatuses(<guid>)
```

## Attributes

Writable: **43** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_changegradesonretrain`, `msdyn_computationconfig`, `msdyn_computationfrequency`, `msdyn_configversion`, `msdyn_created`, `msdyn_dockerimagename`, `msdyn_explanationpath`, `msdyn_gradedefinition`, `msdyn_iscurrent`, `msdyn_islandurl`, `msdyn_isnewentityadditionopted`, `msdyn_isscheduled`, `msdyn_message`, `msdyn_modelid`, `msdyn_modelpath`, `msdyn_modelsource`, `msdyn_modelversion`, `msdyn_name`, `msdyn_nextcomputation`, `msdyn_predictionguid`, `msdyn_predictionmodelstatusid`, `msdyn_predictionname`, `msdyn_predictiontype`, `msdyn_psmopted`, `msdyn_publishontrain`, `msdyn_retrycounter`, `msdyn_signalsused`, `msdyn_status`, `msdyn_testsetcount`, `msdyn_timeoutperiodinminutes`, `msdyn_trainingaccuracy`, `msdyn_trainingauc`, `msdyn_trainingconfig`, `msdyn_trainingsetcount`, `msdyn_usebpfasfilter`, `msdyn_validationsetcount`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_predictionmodelstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_predictionmodelstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_predictionmodelstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_predictionmodelstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_predictionmodelstatus` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_predictionmodelstatus` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_predictionmodelstatus` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_predictionmodelstatus` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_predictionmodelstatus_SyncErrors` | [msdyn_predictionmodelstatus](msdyn_predictionmodelstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictionmodelstatus` |
| `msdyn_predictionmodelstatus_DuplicateMatchingRecord` | [msdyn_predictionmodelstatus](msdyn_predictionmodelstatus.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_predictionmodelstatus` |
| `msdyn_predictionmodelstatus_DuplicateBaseRecord` | [msdyn_predictionmodelstatus](msdyn_predictionmodelstatus.md) | `baserecordid` | `baserecordid_msdyn_predictionmodelstatus` |
| `msdyn_predictionmodelstatus_AsyncOperations` | [msdyn_predictionmodelstatus](msdyn_predictionmodelstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictionmodelstatus` |
| `msdyn_predictionmodelstatus_MailboxTrackingFolders` | [msdyn_predictionmodelstatus](msdyn_predictionmodelstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictionmodelstatus` |
| `msdyn_predictionmodelstatus_UserEntityInstanceDatas` | [msdyn_predictionmodelstatus](msdyn_predictionmodelstatus.md) | `objectid` | `objectid_msdyn_predictionmodelstatus` |
| `msdyn_predictionmodelstatus_ProcessSession` | [msdyn_predictionmodelstatus](msdyn_predictionmodelstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictionmodelstatus` |
| `msdyn_predictionmodelstatus_BulkDeleteFailures` | [msdyn_predictionmodelstatus](msdyn_predictionmodelstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictionmodelstatus` |
| `msdyn_predictionmodelstatus_PrincipalObjectAttributeAccesses` | [msdyn_predictionmodelstatus](msdyn_predictionmodelstatus.md) | `objectid` | `objectid_msdyn_predictionmodelstatus` |


## Source

Generated from [msdyn_predictionmodelstatus (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_predictionmodelstatus')) on 2026-05-07.