---
logical: "msdyn_suggestioninteraction"
display: "Interazione suggerimento"
entitySetName: "msdyn_suggestioninteractions"
primaryId: "msdyn_suggestioninteractionid"
primaryName: "msdyn_interactiontype"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Interazione suggerimento

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_suggestioninteraction` |
| Display name | Interazione suggerimento |
| Display (plural) | Interazioni suggerimento |
| Schema name | `msdyn_suggestioninteraction` |
| Entity set (Web API) | `msdyn_suggestioninteractions` |
| Primary id attribute | `msdyn_suggestioninteractionid` |
| Primary name attribute | `msdyn_interactiontype` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_suggestioninteractions?$select=msdyn_interactiontype&$top=10
GET /api/data/v9.2/msdyn_suggestioninteractions(<guid>)
POST /api/data/v9.2/msdyn_suggestioninteractions
PATCH /api/data/v9.2/msdyn_suggestioninteractions(<guid>)
DELETE /api/data/v9.2/msdyn_suggestioninteractions(<guid>)
```

## Attributes

Writable: **12** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_interactioncontext`, `msdyn_interactiontype`, `msdyn_suggestedentity`, `msdyn_suggestionfor`, `msdyn_suggestioninteractionid`, `msdyn_suggestionrequestpayload`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_suggestioninteraction_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_suggestioninteraction_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_suggestioninteraction_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_suggestioninteraction_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_suggestioninteraction` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestedentity` | [incident](incident.md) | `msdyn_suggestedentity` | `msdyn_suggestedentity_incident` |
| `msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestionfor` | [incident](incident.md) | `msdyn_suggestionfor` | `msdyn_suggestionfor_incident` |
| `msdyn_knowledgearticle_msdyn_suggestioninteraction_msdyn_suggestedentity` | [knowledgearticle](knowledgearticle.md) | `msdyn_suggestedentity` | `msdyn_suggestedentity_knowledgearticle` |
| `msdyn_msdyn_suggestionrequestpayload_msdyn_suggestioninteraction_SuggestionRequestPayload` | [msdyn_suggestionrequestpayload](msdyn_suggestionrequestpayload.md) | `msdyn_suggestionrequestpayload` | `msdyn_suggestionrequestpayload` |
| `msdyn_msdyn_ocliveworkitem_msdyn_suggestioninteraction_msdyn_suggestionfor` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_suggestionfor` | `msdyn_suggestionfor_msdyn_ocliveworkitem` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_suggestioninteraction_SyncErrors` | [msdyn_suggestioninteraction](msdyn_suggestioninteraction.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestioninteraction` |
| `msdyn_suggestioninteraction_AsyncOperations` | [msdyn_suggestioninteraction](msdyn_suggestioninteraction.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestioninteraction` |
| `msdyn_suggestioninteraction_MailboxTrackingFolders` | [msdyn_suggestioninteraction](msdyn_suggestioninteraction.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestioninteraction` |
| `msdyn_suggestioninteraction_UserEntityInstanceDatas` | [msdyn_suggestioninteraction](msdyn_suggestioninteraction.md) | `objectid` | `objectid_msdyn_suggestioninteraction` |
| `msdyn_suggestioninteraction_ProcessSession` | [msdyn_suggestioninteraction](msdyn_suggestioninteraction.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestioninteraction` |
| `msdyn_suggestioninteraction_BulkDeleteFailures` | [msdyn_suggestioninteraction](msdyn_suggestioninteraction.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestioninteraction` |
| `msdyn_suggestioninteraction_PrincipalObjectAttributeAccesses` | [msdyn_suggestioninteraction](msdyn_suggestioninteraction.md) | `objectid` | `objectid_msdyn_suggestioninteraction` |


## Source

Generated from [msdyn_suggestioninteraction (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_suggestioninteraction')) on 2026-05-07.