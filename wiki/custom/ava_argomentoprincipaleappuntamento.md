---
logical: "ava_argomentoprincipaleappuntamento"
display: "Criterio di Prioritizzazione"
entitySetName: "ava_argomentoprincipaleappuntamentos"
primaryId: "ava_argomentoprincipaleappuntamentoid"
primaryName: "ava_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Criterio di Prioritizzazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ava_argomentoprincipaleappuntamento` |
| Display name | Criterio di Prioritizzazione |
| Display (plural) | Criteri di Prioritizzazione |
| Schema name | `ava_ArgomentoPrincipaleAppuntamento` |
| Entity set (Web API) | `ava_argomentoprincipaleappuntamentos` |
| Primary id attribute | `ava_argomentoprincipaleappuntamentoid` |
| Primary name attribute | `ava_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/ava_argomentoprincipaleappuntamentos?$select=ava_name&$top=10
GET /api/data/v9.2/ava_argomentoprincipaleappuntamentos(<guid>)
POST /api/data/v9.2/ava_argomentoprincipaleappuntamentos
PATCH /api/data/v9.2/ava_argomentoprincipaleappuntamentos(<guid>)
DELETE /api/data/v9.2/ava_argomentoprincipaleappuntamentos(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`ava_argomentoprincipaleappuntamentoid`, `ava_codice`, `ava_criterio`, `ava_name`, `ava_priorita`, `ava_regolaargomentoprincipaleid`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_ava_argomentoprincipaleappuntamento_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_ava_argomentoprincipaleappuntamento_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_ava_argomentoprincipaleappuntamento_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_ava_argomentoprincipaleappuntamento_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_ava_argomentoprincipaleappuntamento` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_ava_argomentoprincipaleappuntamento` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_ava_argomentoprincipaleappuntamento` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_ava_argomentoprincipaleappuntamento` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `ava_argomentoprincipaleappuntamento_Regolaargomentoprincipaleid_ava_argomentoprincipale` | [ava_argomentoprincipale](ava_argomentoprincipale.md) | `ava_regolaargomentoprincipaleid` | `ava_Regolaargomentoprincipaleid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_argomentoprincipaleappuntamento_SyncErrors` | [ava_argomentoprincipaleappuntamento](ava_argomentoprincipaleappuntamento.md) | `regardingobjectid` | `regardingobjectid_ava_argomentoprincipaleappuntamento` |
| `ava_argomentoprincipaleappuntamento_DuplicateMatchingRecord` | [ava_argomentoprincipaleappuntamento](ava_argomentoprincipaleappuntamento.md) | `duplicaterecordid` | `duplicaterecordid_ava_argomentoprincipaleappuntamento` |
| `ava_argomentoprincipaleappuntamento_DuplicateBaseRecord` | [ava_argomentoprincipaleappuntamento](ava_argomentoprincipaleappuntamento.md) | `baserecordid` | `baserecordid_ava_argomentoprincipaleappuntamento` |
| `ava_argomentoprincipaleappuntamento_AsyncOperations` | [ava_argomentoprincipaleappuntamento](ava_argomentoprincipaleappuntamento.md) | `regardingobjectid` | `regardingobjectid_ava_argomentoprincipaleappuntamento` |
| `ava_argomentoprincipaleappuntamento_MailboxTrackingFolders` | [ava_argomentoprincipaleappuntamento](ava_argomentoprincipaleappuntamento.md) | `regardingobjectid` | `regardingobjectid_ava_argomentoprincipaleappuntamento` |
| `ava_argomentoprincipaleappuntamento_UserEntityInstanceDatas` | [ava_argomentoprincipaleappuntamento](ava_argomentoprincipaleappuntamento.md) | `objectid` | `objectid_ava_argomentoprincipaleappuntamento` |
| `ava_argomentoprincipaleappuntamento_ProcessSession` | [ava_argomentoprincipaleappuntamento](ava_argomentoprincipaleappuntamento.md) | `regardingobjectid` | `regardingobjectid_ava_argomentoprincipaleappuntamento` |
| `ava_argomentoprincipaleappuntamento_BulkDeleteFailures` | [ava_argomentoprincipaleappuntamento](ava_argomentoprincipaleappuntamento.md) | `regardingobjectid` | `regardingobjectid_ava_argomentoprincipaleappuntamento` |
| `ava_argomentoprincipaleappuntamento_PrincipalObjectAttributeAccesses` | [ava_argomentoprincipaleappuntamento](ava_argomentoprincipaleappuntamento.md) | `objectid` | `objectid_ava_argomentoprincipaleappuntamento` |


## Source

Generated from [ava_argomentoprincipaleappuntamento (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='ava_argomentoprincipaleappuntamento')) on 2026-05-07.