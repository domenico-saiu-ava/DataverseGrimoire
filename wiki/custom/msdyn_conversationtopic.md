---
logical: "msdyn_conversationtopic"
display: "Argomento di conversazione"
entitySetName: "msdyn_conversationtopics"
primaryId: "msdyn_conversationtopicid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Argomento di conversazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationtopic` |
| Display name | Argomento di conversazione |
| Display (plural) | Argomenti di conversazione |
| Schema name | `msdyn_conversationtopic` |
| Entity set (Web API) | `msdyn_conversationtopics` |
| Primary id attribute | `msdyn_conversationtopicid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationtopics?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationtopics(<guid>)
POST /api/data/v9.2/msdyn_conversationtopics
PATCH /api/data/v9.2/msdyn_conversationtopics(<guid>)
DELETE /api/data/v9.2/msdyn_conversationtopics(<guid>)
```

## Attributes

Writable: **12** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_conversationtopicid`, `msdyn_name`, `msdyn_similarityscore`, `msdyn_topiccounts`, `msdyn_topicdate`, `msdyn_topicpercentage`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_conversationtopic_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationtopic_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationtopic_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationtopic_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_conversationtopic` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationtopic_SyncErrors` | [msdyn_conversationtopic](msdyn_conversationtopic.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationtopic` |
| `msdyn_conversationtopic_AsyncOperations` | [msdyn_conversationtopic](msdyn_conversationtopic.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationtopic` |
| `msdyn_conversationtopic_MailboxTrackingFolders` | [msdyn_conversationtopic](msdyn_conversationtopic.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationtopic` |
| `msdyn_conversationtopic_UserEntityInstanceDatas` | [msdyn_conversationtopic](msdyn_conversationtopic.md) | `objectid` | `objectid_msdyn_conversationtopic` |
| `msdyn_conversationtopic_ProcessSession` | [msdyn_conversationtopic](msdyn_conversationtopic.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationtopic` |
| `msdyn_conversationtopic_BulkDeleteFailures` | [msdyn_conversationtopic](msdyn_conversationtopic.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationtopic` |
| `msdyn_conversationtopic_PrincipalObjectAttributeAccesses` | [msdyn_conversationtopic](msdyn_conversationtopic.md) | `objectid` | `objectid_msdyn_conversationtopic` |
| `msdyn_msdyn_conversationtopic_msdyn_conversationtopic_conversation_conversationtopicid` | [msdyn_conversationtopic](msdyn_conversationtopic.md) | `msdyn_conversationtopicid` | `msdyn_conversationtopicid` |


## Source

Generated from [msdyn_conversationtopic (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_conversationtopic')) on 2026-05-07.