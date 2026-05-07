---
logical: "msdyn_dataflowtemplate"
display: "Modello di flusso di dati"
entitySetName: "msdyn_dataflowtemplates"
primaryId: "msdyn_dataflowtemplateid"
primaryName: "msdyn_uniquename"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello di flusso di dati

Entità per archiviare le informazioni sui modelli di flusso di dati

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataflowtemplate` |
| Display name | Modello di flusso di dati |
| Display (plural) | Modelli di flusso di dati |
| Schema name | `msdyn_DataflowTemplate` |
| Entity set (Web API) | `msdyn_dataflowtemplates` |
| Primary id attribute | `msdyn_dataflowtemplateid` |
| Primary name attribute | `msdyn_uniquename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataflowtemplates?$select=msdyn_uniquename&$top=10
GET /api/data/v9.2/msdyn_dataflowtemplates(<guid>)
POST /api/data/v9.2/msdyn_dataflowtemplates
PATCH /api/data/v9.2/msdyn_dataflowtemplates(<guid>)
DELETE /api/data/v9.2/msdyn_dataflowtemplates(<guid>)
```

## Attributes

Writable: **19** · Read-only: **17**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_category`, `msdyn_configuration`, `msdyn_dataflowtemplateid`, `msdyn_description`, `msdyn_helplink`, `msdyn_isdisabled`, `msdyn_mashupdocument`, `msdyn_templatename`, `msdyn_templatestate`, `msdyn_templateversion`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_templateiconid`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataflowtemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataflowtemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataflowtemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataflowtemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_dataflowtemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_dataflowtemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_dataflowtemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_dataflowtemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `ImageDescriptor_msdyn_DataflowTemplate_msdyn_TemplateIcon` | [imagedescriptor](imagedescriptor.md) | `msdyn_templateiconid` | `msdyn_templateiconid_imagedescriptor` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataflowtemplate_SyncErrors` | [msdyn_dataflowtemplate](msdyn_dataflowtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowtemplate` |
| `msdyn_dataflowtemplate_AsyncOperations` | [msdyn_dataflowtemplate](msdyn_dataflowtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowtemplate` |
| `msdyn_dataflowtemplate_MailboxTrackingFolders` | [msdyn_dataflowtemplate](msdyn_dataflowtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowtemplate` |
| `msdyn_dataflowtemplate_UserEntityInstanceDatas` | [msdyn_dataflowtemplate](msdyn_dataflowtemplate.md) | `objectid` | `objectid_msdyn_dataflowtemplate` |
| `msdyn_dataflowtemplate_ProcessSession` | [msdyn_dataflowtemplate](msdyn_dataflowtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowtemplate` |
| `msdyn_dataflowtemplate_BulkDeleteFailures` | [msdyn_dataflowtemplate](msdyn_dataflowtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowtemplate` |
| `msdyn_dataflowtemplate_PrincipalObjectAttributeAccesses` | [msdyn_dataflowtemplate](msdyn_dataflowtemplate.md) | `objectid` | `objectid_msdyn_dataflowtemplate` |


## Source

Generated from [msdyn_dataflowtemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dataflowtemplate')) on 2026-05-07.