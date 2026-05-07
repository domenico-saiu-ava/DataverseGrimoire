---
logical: "msdyn_productivitymacroconnector"
display: "Connettore macro"
entitySetName: "msdyn_productivitymacroconnectors"
primaryId: "msdyn_productivitymacroconnectorid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Connettore macro

Attributi per connettori macro

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_productivitymacroconnector` |
| Display name | Connettore macro |
| Display (plural) | Connettori macro |
| Schema name | `msdyn_productivitymacroconnector` |
| Entity set (Web API) | `msdyn_productivitymacroconnectors` |
| Primary id attribute | `msdyn_productivitymacroconnectorid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_productivitymacroconnectors?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_productivitymacroconnectors(<guid>)
POST /api/data/v9.2/msdyn_productivitymacroconnectors
PATCH /api/data/v9.2/msdyn_productivitymacroconnectors(<guid>)
DELETE /api/data/v9.2/msdyn_productivitymacroconnectors(<guid>)
```

## Attributes

Writable: **22** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_brandcolor`, `msdyn_callback`, `msdyn_categorykey`, `msdyn_categorylabel`, `msdyn_description`, `msdyn_displayname`, `msdyn_icon`, `msdyn_name`, `msdyn_prefix`, `msdyn_productivitymacroconnectorid`, `msdyn_title`, `msdyn_type`, `msdyn_uniquename`, `msdyn_webresourcename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_productivitymacroconnector_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_productivitymacroconnector_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_productivitymacroconnector_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_productivitymacroconnector_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_productivitymacroconnector` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_productivitymacroconnector` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_productivitymacroconnector` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_productivitymacroconnector` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_productivitymacroconnector_SyncErrors` | [msdyn_productivitymacroconnector](msdyn_productivitymacroconnector.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivitymacroconnector` |
| `msdyn_productivitymacroconnector_DuplicateMatchingRecord` | [msdyn_productivitymacroconnector](msdyn_productivitymacroconnector.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_productivitymacroconnector` |
| `msdyn_productivitymacroconnector_DuplicateBaseRecord` | [msdyn_productivitymacroconnector](msdyn_productivitymacroconnector.md) | `baserecordid` | `baserecordid_msdyn_productivitymacroconnector` |
| `msdyn_productivitymacroconnector_AsyncOperations` | [msdyn_productivitymacroconnector](msdyn_productivitymacroconnector.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivitymacroconnector` |
| `msdyn_productivitymacroconnector_MailboxTrackingFolders` | [msdyn_productivitymacroconnector](msdyn_productivitymacroconnector.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivitymacroconnector` |
| `msdyn_productivitymacroconnector_UserEntityInstanceDatas` | [msdyn_productivitymacroconnector](msdyn_productivitymacroconnector.md) | `objectid` | `objectid_msdyn_productivitymacroconnector` |
| `msdyn_productivitymacroconnector_ProcessSession` | [msdyn_productivitymacroconnector](msdyn_productivitymacroconnector.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivitymacroconnector` |
| `msdyn_productivitymacroconnector_BulkDeleteFailures` | [msdyn_productivitymacroconnector](msdyn_productivitymacroconnector.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivitymacroconnector` |
| `msdyn_productivitymacroconnector_PrincipalObjectAttributeAccesses` | [msdyn_productivitymacroconnector](msdyn_productivitymacroconnector.md) | `objectid` | `objectid_msdyn_productivitymacroconnector` |
| `msdyn_msdyn_Prod_macroconnector_msdyn_macroactiontemplate_macroconnector` | [msdyn_productivitymacroconnector](msdyn_productivitymacroconnector.md) | `msdyn_macroconnector` | `msdyn_macroconnector` |


## Source

Generated from [msdyn_productivitymacroconnector (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_productivitymacroconnector')) on 2026-05-07.