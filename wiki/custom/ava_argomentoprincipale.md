---
logical: "ava_argomentoprincipale"
display: "Regola Argomento Principale"
entitySetName: "ava_argomentoprincipales"
primaryId: "ava_argomentoprincipaleid"
primaryName: "ava_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Regola Argomento Principale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ava_argomentoprincipale` |
| Display name | Regola Argomento Principale |
| Display (plural) | Regole Argomento Principale |
| Schema name | `ava_ArgomentoPrincipale` |
| Entity set (Web API) | `ava_argomentoprincipales` |
| Primary id attribute | `ava_argomentoprincipaleid` |
| Primary name attribute | `ava_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/ava_argomentoprincipales?$select=ava_name&$top=10
GET /api/data/v9.2/ava_argomentoprincipales(<guid>)
POST /api/data/v9.2/ava_argomentoprincipales
PATCH /api/data/v9.2/ava_argomentoprincipales(<guid>)
DELETE /api/data/v9.2/ava_argomentoprincipales(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`ava_argomentoprincipaleid`, `ava_codice`, `ava_name`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_ava_argomentoprincipale_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_ava_argomentoprincipale_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_ava_argomentoprincipale_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_ava_argomentoprincipale_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_ava_argomentoprincipale` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_ava_argomentoprincipale` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_ava_argomentoprincipale` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_ava_argomentoprincipale` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_argomentoprincipaleappuntamento_Regolaargomentoprincipaleid_ava_argomentoprincipale` | [ava_argomentoprincipale](ava_argomentoprincipale.md) | `ava_regolaargomentoprincipaleid` | `ava_Regolaargomentoprincipaleid` |
| `ava_argomentoprincipale_SyncErrors` | [ava_argomentoprincipale](ava_argomentoprincipale.md) | `regardingobjectid` | `regardingobjectid_ava_argomentoprincipale` |
| `ava_argomentoprincipale_DuplicateMatchingRecord` | [ava_argomentoprincipale](ava_argomentoprincipale.md) | `duplicaterecordid` | `duplicaterecordid_ava_argomentoprincipale` |
| `ava_argomentoprincipale_DuplicateBaseRecord` | [ava_argomentoprincipale](ava_argomentoprincipale.md) | `baserecordid` | `baserecordid_ava_argomentoprincipale` |
| `ava_argomentoprincipale_AsyncOperations` | [ava_argomentoprincipale](ava_argomentoprincipale.md) | `regardingobjectid` | `regardingobjectid_ava_argomentoprincipale` |
| `ava_argomentoprincipale_MailboxTrackingFolders` | [ava_argomentoprincipale](ava_argomentoprincipale.md) | `regardingobjectid` | `regardingobjectid_ava_argomentoprincipale` |
| `ava_argomentoprincipale_UserEntityInstanceDatas` | [ava_argomentoprincipale](ava_argomentoprincipale.md) | `objectid` | `objectid_ava_argomentoprincipale` |
| `ava_argomentoprincipale_ProcessSession` | [ava_argomentoprincipale](ava_argomentoprincipale.md) | `regardingobjectid` | `regardingobjectid_ava_argomentoprincipale` |
| `ava_argomentoprincipale_BulkDeleteFailures` | [ava_argomentoprincipale](ava_argomentoprincipale.md) | `regardingobjectid` | `regardingobjectid_ava_argomentoprincipale` |
| `ava_argomentoprincipale_PrincipalObjectAttributeAccesses` | [ava_argomentoprincipale](ava_argomentoprincipale.md) | `objectid` | `objectid_ava_argomentoprincipale` |


## Source

Generated from [ava_argomentoprincipale (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='ava_argomentoprincipale')) on 2026-05-07.