---
logical: "msdyn_productivitymacroactiontemplate"
display: "Modello azione di macro"
entitySetName: "msdyn_productivitymacroactiontemplates"
primaryId: "msdyn_productivitymacroactiontemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello azione di macro

Attributi per il modello di azione macro

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_productivitymacroactiontemplate` |
| Display name | Modello azione di macro |
| Display (plural) | Modelli azione di macro |
| Schema name | `msdyn_productivitymacroactiontemplate` |
| Entity set (Web API) | `msdyn_productivitymacroactiontemplates` |
| Primary id attribute | `msdyn_productivitymacroactiontemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_productivitymacroactiontemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_productivitymacroactiontemplates(<guid>)
POST /api/data/v9.2/msdyn_productivitymacroactiontemplates
PATCH /api/data/v9.2/msdyn_productivitymacroactiontemplates(<guid>)
DELETE /api/data/v9.2/msdyn_productivitymacroactiontemplates(<guid>)
```

## Attributes

Writable: **24** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_actiondescription`, `msdyn_brandcolor`, `msdyn_displayname`, `msdyn_icon`, `msdyn_inputparameters`, `msdyn_kind`, `msdyn_macroconnector`, `msdyn_name`, `msdyn_outputparameters`, `msdyn_productivitymacroactiontemplateid`, `msdyn_runtimeapi`, `msdyn_subtitle`, `msdyn_summary`, `msdyn_title`, `msdyn_uniquename`, `msdyn_visibility`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_productivitymacroactiontemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_productivitymacroactiontemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_productivitymacroactiontemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_productivitymacroactiontemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_productivitymacroactiontemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_productivitymacroactiontemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_productivitymacroactiontemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_productivitymacroactiontemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_Prod_macroconnector_msdyn_macroactiontemplate_macroconnector` | [msdyn_productivitymacroconnector](msdyn_productivitymacroconnector.md) | `msdyn_macroconnector` | `msdyn_macroconnector` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_productivitymacroactiontemplate_SyncErrors` | [msdyn_productivitymacroactiontemplate](msdyn_productivitymacroactiontemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivitymacroactiontemplate` |
| `msdyn_productivitymacroactiontemplate_DuplicateMatchingRecord` | [msdyn_productivitymacroactiontemplate](msdyn_productivitymacroactiontemplate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_productivitymacroactiontemplate` |
| `msdyn_productivitymacroactiontemplate_DuplicateBaseRecord` | [msdyn_productivitymacroactiontemplate](msdyn_productivitymacroactiontemplate.md) | `baserecordid` | `baserecordid_msdyn_productivitymacroactiontemplate` |
| `msdyn_productivitymacroactiontemplate_AsyncOperations` | [msdyn_productivitymacroactiontemplate](msdyn_productivitymacroactiontemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivitymacroactiontemplate` |
| `msdyn_productivitymacroactiontemplate_MailboxTrackingFolders` | [msdyn_productivitymacroactiontemplate](msdyn_productivitymacroactiontemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivitymacroactiontemplate` |
| `msdyn_productivitymacroactiontemplate_UserEntityInstanceDatas` | [msdyn_productivitymacroactiontemplate](msdyn_productivitymacroactiontemplate.md) | `objectid` | `objectid_msdyn_productivitymacroactiontemplate` |
| `msdyn_productivitymacroactiontemplate_ProcessSession` | [msdyn_productivitymacroactiontemplate](msdyn_productivitymacroactiontemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivitymacroactiontemplate` |
| `msdyn_productivitymacroactiontemplate_BulkDeleteFailures` | [msdyn_productivitymacroactiontemplate](msdyn_productivitymacroactiontemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivitymacroactiontemplate` |
| `msdyn_productivitymacroactiontemplate_PrincipalObjectAttributeAccesses` | [msdyn_productivitymacroactiontemplate](msdyn_productivitymacroactiontemplate.md) | `objectid` | `objectid_msdyn_productivitymacroactiontemplate` |
| `msdyn_msdyn_prod_macroactiontemplate_msdyn_actioninput` | [msdyn_productivitymacroactiontemplate](msdyn_productivitymacroactiontemplate.md) | `msdyn_actiontemplateinputparameterid` | `msdyn_actiontemplateinputparameterid` |
| `msdyn_msdyn_prod_macroactiontemplate_msdyn_actionout` | [msdyn_productivitymacroactiontemplate](msdyn_productivitymacroactiontemplate.md) | `msdyn_actiontemplateoutputparameterid` | `msdyn_actiontemplateoutputparameterid` |


## Source

Generated from [msdyn_productivitymacroactiontemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_productivitymacroactiontemplate')) on 2026-05-07.