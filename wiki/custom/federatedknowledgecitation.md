---
logical: "federatedknowledgecitation"
display: "FederatedKnowledgeCitation"
entitySetName: "federatedknowledgecitations"
primaryId: "federatedknowledgecitationid"
primaryName: "federatedknowledgecitationname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# FederatedKnowledgeCitation

Registra le informazioni sulla citazione della Knowledge Base federata per la visualizzazione UCI

## Identity

| Property | Value |
| --- | --- |
| Logical name | `federatedknowledgecitation` |
| Display name | FederatedKnowledgeCitation |
| Display (plural) | FederatedKnowledgeCitations |
| Schema name | `FederatedKnowledgeCitation` |
| Entity set (Web API) | `federatedknowledgecitations` |
| Primary id attribute | `federatedknowledgecitationid` |
| Primary name attribute | `federatedknowledgecitationname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/federatedknowledgecitations?$select=federatedknowledgecitationname&$top=10
GET /api/data/v9.2/federatedknowledgecitations(<guid>)
POST /api/data/v9.2/federatedknowledgecitations
PATCH /api/data/v9.2/federatedknowledgecitations(<guid>)
DELETE /api/data/v9.2/federatedknowledgecitations(<guid>)
```

## Attributes

Writable: **17** · Read-only: **10**

### Writable

`federatedknowledgecitationid`, `federatedknowledgecitationname`, `federatedknowledgecitationurl`, `federatedknowledgerecordid`, `federatedknowledgeresults`, `federatedknowledgesearchid`, `federatedknowledgesearchtimestamp`, `federatedknowledgesourcename`, `federatedknowledgeuserid`, `importsequencenumber`, `knowledgesourcetablename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_federatedknowledgecitation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_federatedknowledgecitation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_federatedknowledgecitation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_federatedknowledgecitation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_federatedknowledgecitation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_federatedknowledgecitation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_federatedknowledgecitation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_federatedknowledgecitation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `federatedknowledgecitation_SyncErrors` | [federatedknowledgecitation](federatedknowledgecitation.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgecitation` |
| `federatedknowledgecitation_DuplicateMatchingRecord` | [federatedknowledgecitation](federatedknowledgecitation.md) | `duplicaterecordid` | `duplicaterecordid_federatedknowledgecitation` |
| `federatedknowledgecitation_DuplicateBaseRecord` | [federatedknowledgecitation](federatedknowledgecitation.md) | `baserecordid` | `baserecordid_federatedknowledgecitation` |
| `federatedknowledgecitation_AsyncOperations` | [federatedknowledgecitation](federatedknowledgecitation.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgecitation` |
| `federatedknowledgecitation_MailboxTrackingFolders` | [federatedknowledgecitation](federatedknowledgecitation.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgecitation` |
| `federatedknowledgecitation_UserEntityInstanceDatas` | [federatedknowledgecitation](federatedknowledgecitation.md) | `objectid` | `objectid_federatedknowledgecitation` |
| `federatedknowledgecitation_ProcessSession` | [federatedknowledgecitation](federatedknowledgecitation.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgecitation` |
| `federatedknowledgecitation_BulkDeleteFailures` | [federatedknowledgecitation](federatedknowledgecitation.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgecitation` |
| `federatedknowledgecitation_PrincipalObjectAttributeAccesses` | [federatedknowledgecitation](federatedknowledgecitation.md) | `objectid` | `objectid_federatedknowledgecitation` |


## Source

Generated from [federatedknowledgecitation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='federatedknowledgecitation')) on 2026-05-07.